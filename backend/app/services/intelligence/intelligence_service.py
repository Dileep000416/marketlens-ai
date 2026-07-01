from typing import List

from app.models.news_article import NewsArticle
from app.services.ai_service import generate_summary


# =========================================================
# Intelligence Context Builder
# =========================================================

class IntelligenceContextBuilder:
    """
    Builds a rich business context for the AI model.

    Instead of sending only headlines,
    we provide structured information from
    every available news article.

    This improves:

    • Executive Summary
    • Market Sentiment
    • Threat Detection
    • Confidence Score
    • Future Compare Engine
    • Future Recommendation Engine
    """

    @staticmethod
    def build(
        company_name: str,
        articles: List[NewsArticle],
    ) -> str:

        if not articles:

            return f"""
Company

{company_name}

No recent news available.
"""

        context = [

            "=" * 70,

            "MARKET INTELLIGENCE REPORT",

            "=" * 70,

            "",

            f"Company : {company_name}",

            f"Articles Analysed : {len(articles)}",

            "",

            "Latest Market News",

            ""

        ]

        for index, article in enumerate(articles, start=1):

            context.extend(

                [

                    "-" * 60,

                    f"Article {index}",

                    "",

                    f"Title : {article.title}",

                    f"Description : {article.description or 'Not Available'}",

                    f"Content : {article.content or 'Not Available'}",

                    f"Author : {article.author or 'Unknown'}",

                    f"Source : {article.source or 'Unknown'}",

                    f"Published : {article.published_at or 'Unknown'}",

                    ""

                ]

            )

        context.append("=" * 70)

        return "\n".join(context)


# =========================================================
# Intelligence Engine
# =========================================================

class IntelligenceEngine:
    """
    Central Intelligence Engine.

    Responsibilities

    ✔ Build AI Context

    ✔ Generate Executive Intelligence

    ✔ Prepare reusable intelligence for

        Dashboard

        Compare Engine

        Recommendation Engine

        Analytics

        Timeline

    This class should be the ONLY entry point
    for AI-generated business intelligence.
    """

    @staticmethod
    def generate(

        company_name: str,

        articles: List[NewsArticle],

    ):

        context = IntelligenceContextBuilder.build(

            company_name,

            articles,

        )

        intelligence = generate_summary(

            company_name,

            context,

        )

        return intelligence


# =========================================================
# Public API
# =========================================================

def build_market_intelligence(

    company_name: str,

    articles: List[NewsArticle],

):
    """
    Public interface used by the platform.

    Future modules should NEVER call
    generate_summary() directly.

    They should always use this function.

    Used by

    • Dashboard

    • Compare

    • Recommendations

    • Analytics

    • Timeline
    """

    return IntelligenceEngine.generate(

        company_name,

        articles,

    )