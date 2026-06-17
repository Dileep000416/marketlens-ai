from fastapi import FastAPI

from app.database.base import Base
from app.database.connection import engine

from app.models import Competitor
from app.api.competitor import router as competitor_router

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(competitor_router)


@app.get("/")
def home():
    return {
        "message": "MarketLens AI Backend Running Successfully"
    }