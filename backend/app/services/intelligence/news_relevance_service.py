from datetime import datetime
from typing import List


class NewsRelevanceEngine:
    """
    Scores news articles before they are stored.

    Purpose
    -------
    News APIs often return articles that merely mention
    the company rather than focusing on it.

    This engine ranks articles so only the most relevant
    articles are used for AI intelligence.
    """

    TRUSTED_SOURCES = {

        "Reuters",
        "Bloomberg",
        "CNBC",
        "Forbes",
        "TechCrunch",
        "The Verge",
        "Electrek",
        "Financial Times",
        "Business Insider",
        "Associated Press",

    }

    # --------------------------------------------------

    @classmethod
    def score(
        cls,
        company_name: str,
        article: dict,
    ) -> int:

        score = 0

        company = company_name.lower()

        title = (
            article.get("title") or ""
        ).lower()

        description = (
            article.get("description") or ""
        ).lower()

        content = (
            article.get("content") or ""
        ).lower()

        source = (
            article.get("source", {})
            .get("name", "")
        )

        published = article.get(
            "publishedAt"
        )

        # ------------------------------
        # Company Name
        # ------------------------------

        if company in title:
            score += 50

        if company in description:
            score += 25

        if company in content:
            score += 15

        # ------------------------------
        # Trusted Sources
        # ------------------------------

        if source in cls.TRUSTED_SOURCES:
            score += 15

        # ------------------------------
        # Fresh News Bonus
        # ------------------------------

        if published:

            try:

                published = published.replace(
                    "Z",
                    "+00:00",
                )

                published_date = datetime.fromisoformat(
                    published
                )

                hours = (
                    datetime.now(
                        published_date.tzinfo
                    ) - published_date
                ).total_seconds() / 3600

                if hours <= 24:

                    score += 20

                elif hours <= 72:

                    score += 10

            except Exception:

                pass

        return score


def rank_articles(
    company_name: str,
    articles: List[dict],
) -> List[dict]:
    """
    Rank all NewsAPI articles.

    Returns
    -------
    Highest scoring articles first.
    """

    ranked = sorted(

        articles,

        key=lambda article:

        NewsRelevanceEngine.score(

            company_name,

            article,

        ),

        reverse=True,

    )

    return ranked