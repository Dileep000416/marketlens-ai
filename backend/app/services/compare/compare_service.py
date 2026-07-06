from sqlalchemy.orm import Session

from app.models.news_article import NewsArticle

from app.services.news_service import fetch_news

from app.services.intelligence.intelligence_service import (
    build_market_intelligence,
)

from app.services.intelligence.activity_score_service import (
    calculate_activity_score,
)

from app.services.compare.compare_intelligence_service import (
    build_company_comparison,
)
from app.services.analytics.analytics_service import (
    track_event,
)



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
# Compare Workflow
# ---------------------------------------------------------

def compare_companies(
    db: Session,
    company_1: str,
    company_2: str,
):

    company_1 = company_1.strip().title()
    company_2 = company_2.strip().title()
    track_event(
    db=db,
    event_type="compare",
    company=company_1,
    company_2=company_2,
)

    # -----------------------------------------------------
    # Load Articles
    # -----------------------------------------------------

    company_1_articles = get_company_articles(
        db,
        company_1,
    )

    if not company_1_articles:

        fetch_news(company_1)

        company_1_articles = get_company_articles(
            db,
            company_1,
        )

    company_2_articles = get_company_articles(
        db,
        company_2,
    )

    if not company_2_articles:

        fetch_news(company_2)

        company_2_articles = get_company_articles(
            db,
            company_2,
        )

    if not company_1_articles or not company_2_articles:

        return {
            "error": "Unable to collect sufficient news for comparison."
        }

    # -----------------------------------------------------
    # Build Intelligence
    # -----------------------------------------------------

    intelligence_1 = build_market_intelligence(
        company_1,
        company_1_articles,
    )

    intelligence_2 = build_market_intelligence(
        company_2,
        company_2_articles,
    )

    # -----------------------------------------------------
    # Calculate Activity Scores
    # -----------------------------------------------------

    company_1_sources = len(
        {
            article.source
            for article in company_1_articles
            if article.source
        }
    )

    company_2_sources = len(
        {
            article.source
            for article in company_2_articles
            if article.source
        }
    )

    company_1_score = calculate_activity_score(
        total_articles=len(company_1_articles),
        total_sources=company_1_sources,
        market_intelligence=intelligence_1.get(
            "market_intelligence",
            {},
        ),
    )

    company_2_score = calculate_activity_score(
        total_articles=len(company_2_articles),
        total_sources=company_2_sources,
        market_intelligence=intelligence_2.get(
            "market_intelligence",
            {},
        ),
    )

    # -----------------------------------------------------
    # Backend Decides Winner
    # -----------------------------------------------------

    winner = (
        company_1
        if company_1_score >= company_2_score
        else company_2
    )

    # -----------------------------------------------------
    # AI Comparison
    # -----------------------------------------------------

    comparison = build_company_comparison(
        company_1,
        company_2,
        intelligence_1,
        intelligence_2,
    )

    # Backend overrides AI guesses

    comparison["winner"] = winner

    comparison["market_momentum"] = {
        "company_1": company_1_score,
        "company_2": company_2_score,
    }

    # -----------------------------------------------------
    # Final Response
    # -----------------------------------------------------

    return {

        "company_1": {
            "name": company_1,
            "articles": len(company_1_articles),
            "activity_score": company_1_score,
            "intelligence": intelligence_1,
        },

        "company_2": {
            "name": company_2,
            "articles": len(company_2_articles),
            "activity_score": company_2_score,
            "intelligence": intelligence_2,
        },

        "comparison": comparison,

    }