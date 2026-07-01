from fastapi import APIRouter

from app.database.connection import SessionLocal
from app.models.news_article import NewsArticle
from app.services.news_service import fetch_news

router = APIRouter(
    prefix="/news",
    tags=["News"]
)


@router.get("/{company_name}")
def get_news(
    company_name: str
):
    return fetch_news(
        company_name
    )


@router.get("/history/{company_name}")
def get_news_history(
    company_name: str
):

    db = SessionLocal()

    try:

        articles = (
            db.query(NewsArticle)
            .filter(
                NewsArticle.competitor_name == company_name
            )
            .all()
        )

        return [
            {
                "id": article.id,
                "title": article.title,
                "source": article.source,
                "url": article.url
            }
            for article in articles
        ]

    finally:
        db.close()