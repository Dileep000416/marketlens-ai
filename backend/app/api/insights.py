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

    headlines = "\n".join(
    article["title"]
    for article in news
)

    summary = generate_summary(
        company_name,
        headlines
    )

    return {
        "company": company_name,
        "summary": summary
    }