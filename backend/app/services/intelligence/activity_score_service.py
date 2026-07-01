"""
Activity Score Engine

This module is responsible for calculating a company's
overall market activity score.

The score is based on multiple business signals instead
of simply counting the number of news articles.

This service is intentionally isolated so future scoring
logic can evolve without affecting the dashboard or AI
services.
"""


class ActivityScoreEngine:

    # -----------------------------------------------------
    # Weight Configuration
    # -----------------------------------------------------

    ARTICLE_WEIGHT = 35
    SOURCE_WEIGHT = 20
    SENTIMENT_WEIGHT = 20
    THREAT_WEIGHT = 15
    CONFIDENCE_WEIGHT = 10

    # -----------------------------------------------------
    # Article Score
    # -----------------------------------------------------

    @staticmethod
    def article_score(total_articles: int) -> float:

        return min(
            (total_articles / 10) * 100,
            100
        )

    # -----------------------------------------------------
    # Source Diversity
    # -----------------------------------------------------

    @staticmethod
    def source_score(total_sources: int) -> float:

        return min(
            (total_sources / 5) * 100,
            100
        )

    # -----------------------------------------------------
    # Market Sentiment
    # -----------------------------------------------------

    @staticmethod
    def sentiment_score(sentiment: dict) -> float:

        if not sentiment:
            return 50

        return sentiment.get(
            "positive",
            50
        )

    # -----------------------------------------------------
    # Threat Radar
    # -----------------------------------------------------

    @staticmethod
    def threat_score(threat: dict) -> float:

        if not threat:
            return 50

        level = threat.get(
            "level",
            "Medium"
        ).lower()

        mapping = {

            "low": 100,

            "medium": 70,

            "high": 40

        }

        return mapping.get(
            level,
            50
        )

    # -----------------------------------------------------
    # AI Confidence
    # -----------------------------------------------------

    @staticmethod
    def confidence_score(confidence: dict) -> float:

        if not confidence:
            return 70

        return confidence.get(
            "score",
            70
        )

    # -----------------------------------------------------
    # Final Score
    # -----------------------------------------------------

    @classmethod
    def calculate(

        cls,

        total_articles,

        total_sources,

        market_intelligence,

    ):

        article = cls.article_score(
            total_articles
        )

        sources = cls.source_score(
            total_sources
        )

        sentiment = cls.sentiment_score(

            market_intelligence.get(
                "sentiment",
                {}
            )

        )

        threat = cls.threat_score(

            market_intelligence.get(
                "threat_radar",
                {}
            )

        )

        confidence = cls.confidence_score(

            market_intelligence.get(
                "confidence",
                {}
            )

        )

        score = (

            article * cls.ARTICLE_WEIGHT +

            sources * cls.SOURCE_WEIGHT +

            sentiment * cls.SENTIMENT_WEIGHT +

            threat * cls.THREAT_WEIGHT +

            confidence * cls.CONFIDENCE_WEIGHT

        ) / 100

        return round(score)


# ---------------------------------------------------------
# Public API
# ---------------------------------------------------------

def calculate_activity_score(

    total_articles,

    total_sources,

    market_intelligence,

):

    """
    Public helper used by Dashboard Service.

    Returns:

        Integer score between 0 and 100.
    """

    return ActivityScoreEngine.calculate(

        total_articles,

        total_sources,

        market_intelligence,

    )