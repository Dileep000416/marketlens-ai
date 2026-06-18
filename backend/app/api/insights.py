from fastapi import APIRouter

from app.services.news_service import fetch_news

from app.services.ai_service import generate_summary


router = APIRouter(
    prefix="/insights",
    tags=["AI Insights"]
)


@router.get("/{company_name}")
def get_insights(
    company_name: str
):

    news = fetch_news(
        company_name
    )

    summary = generate_summary(
        news
    )

    return {
        "company": company_name,
        "summary": summary
    }