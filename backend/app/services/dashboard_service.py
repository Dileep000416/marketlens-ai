from sqlalchemy.orm import Session

from app.models.news_article import NewsArticle

from app.services.news_service import fetch_news

from app.services.intelligence.intelligence_service import (
    build_market_intelligence,
)

from app.services.intelligence.activity_score_service import (
    calculate_activity_score,
)

from app.services.recommendation.recommendation_service import (
    generate_recommendations,
)

# ---------------------------------------------------------
# Default Dashboard Response
# ---------------------------------------------------------

EMPTY_DASHBOARD = {

    "company": "",

    "total_articles": 0,

    "latest_article": None,

    "sources": [],

    "activity_score": 0,

    "company_profile": {

        "industry": "",

        "business_focus": "",

        "market_position": "",

        "description": ""

    },

    "executive_summary": "",

    "market_intelligence": {

        "sentiment": {

            "overall": "Neutral",

            "positive": 0,

            "neutral": 100,

            "negative": 0,

            "reason": ""

        },

        "threat_radar": {

            "level": "Low",

            "summary": "",

            "top_threats": []

        },

        "confidence": {

            "score": 70,

            "reason": ""

        }

    },

    "ai_summary": {

        "main_trends": [],

        "opportunities": [],

        "risks": []

    },

    "recommended_competitors": []

}


# ---------------------------------------------------------
# Read Company Articles
# ---------------------------------------------------------

def get_company_articles(
    db: Session,
    company_name: str,
):

    return (

        db.query(NewsArticle)

        .filter(
            NewsArticle.competitor_name == company_name
        )

        .all()

    )


# ---------------------------------------------------------
# Build Dashboard Response
# ---------------------------------------------------------

def build_dashboard_response(

    company_name,

    articles,

    intelligence,

    recommendations,

):

    latest_article = articles[-1].title

    unique_sources = sorted(

        {

            article.source

            for article in articles

            if article.source

        }

    )

    activity_score = calculate_activity_score(

        total_articles=len(articles),

        total_sources=len(unique_sources),

        market_intelligence=intelligence.get(

            "market_intelligence",

            {}

        ),

    )

    return {

        "company": company_name,

        "total_articles": len(articles),

        "latest_article": latest_article,

        "sources": unique_sources,

        "activity_score": activity_score,

        "company_profile": intelligence.get(

            "company_profile",

            EMPTY_DASHBOARD["company_profile"]

        ),

        "executive_summary": intelligence.get(

            "executive_summary",

            ""

        ),

        "market_intelligence": intelligence.get(

            "market_intelligence",

            EMPTY_DASHBOARD["market_intelligence"]

        ),

        "ai_summary": {

            "main_trends": intelligence.get(

                "main_trends",

                []

            ),

            "opportunities": intelligence.get(

                "opportunities",

                []

            ),

            "risks": intelligence.get(

                "risks",

                []

            )

        },

        "recommended_competitors": recommendations,

    }


# ---------------------------------------------------------
# Dashboard Workflow
# ---------------------------------------------------------

def get_dashboard_data(

    db: Session,

    company_name: str,

):

    company_name = company_name.strip().title()

    articles = get_company_articles(

        db,

        company_name,

    )

    # ---------------------------------------------
    # Fetch News Automatically
    # ---------------------------------------------

    if not articles:

        fetch_news(company_name)

        articles = get_company_articles(

            db,

            company_name,

        )

    # ---------------------------------------------
    # No News Available
    # ---------------------------------------------

    if not articles:

        response = EMPTY_DASHBOARD.copy()

        response["company"] = company_name

        return response

    # ---------------------------------------------
    # Intelligence Engine
    # ---------------------------------------------

    intelligence = build_market_intelligence(

        company_name,

        articles,

    )

    # ---------------------------------------------
    # Recommendation Engine
    # ---------------------------------------------

    try:

        recommendations = generate_recommendations(

            company_name=company_name,

            company_profile=intelligence.get(

                "company_profile",

                {},

            ),

            executive_summary=intelligence.get(

                "executive_summary",

                "",

            ),

        )

    except Exception:

        recommendations = []

    # ---------------------------------------------
    # Final Dashboard
    # ---------------------------------------------

    return build_dashboard_response(

        company_name,

        articles,

        intelligence,

        recommendations,

    )