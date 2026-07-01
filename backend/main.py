from fastapi import FastAPI

from app.database.base import Base
from app.database.connection import engine

from app.models import Competitor, NewsArticle
from app.api.competitor import router as competitor_router
from app.api.news import router as news_router
from app.api.insights import router as insights_router
from app.api.dashboard import router as dashboard_router
from app.api.compare import router as compare_router
from fastapi.middleware.cors import CORSMiddleware
Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(competitor_router)
app.include_router(news_router)
app.include_router(
    insights_router
)
app.include_router(dashboard_router)
app.include_router(compare_router)


@app.get("/")
def home():
    return {
        "message": "MarketLens AI Backend Running Successfully"
    }