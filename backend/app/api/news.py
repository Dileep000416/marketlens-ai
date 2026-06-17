from fastapi import APIRouter

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