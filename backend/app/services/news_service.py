import os
from typing import List

import requests
from dotenv import load_dotenv
from app.services.intelligence.news_relevance_service import (
    rank_articles,
)
from app.database.connection import SessionLocal
from app.models.news_article import NewsArticle

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

NEWS_API_URL = "https://newsapi.org/v2/everything"


# ---------------------------------------------------------
# Utilities
# ---------------------------------------------------------

def normalize_company_name(company_name: str) -> str:
    """
    Normalize company names before querying
    and storing them in the database.
    """

    return company_name.strip().title()


# ---------------------------------------------------------
# News API
# ---------------------------------------------------------

def fetch_news(company_name: str) -> List[dict]:

    company_name = normalize_company_name(company_name)

    params = {

        "qInTitle": company_name,

        "apiKey": NEWS_API_KEY,

        "language": "en",

        "sortBy": "publishedAt",

        "pageSize": 20,

    }

    db = SessionLocal()

    collected_articles = []

    try:

        response = requests.get(

            NEWS_API_URL,

            params=params,

            timeout=20,

        )

        response.raise_for_status()

        data = response.json()

        if data.get("status") != "ok":

            print("Unable to fetch news.")

            return []

        ranked_articles = rank_articles(

            company_name,

            data.get("articles", []),

        )

        for article in ranked_articles[:5]:

            title = article.get("title")
            description = article.get("description")
            content = article.get("content")
            author = article.get("author")

            source = (

                article.get("source", {})

                .get("name")

            )

            published_at = article.get("publishedAt")

            image_url = article.get("urlToImage")

            article_url = article.get("url")

            if not title or not article_url:

                continue

            existing = (

                db.query(NewsArticle)

                .filter(
                    NewsArticle.url == article_url
                )

                .first()

            )

            if existing:

                continue

            news = NewsArticle(

                competitor_name=company_name,

                title=title,

                description=description,

                content=content,

                author=author,

                source=source,

                published_at=published_at,

                image_url=image_url,

                url=article_url,

            )

            db.add(news)

            collected_articles.append(

                {

                    "title": title,

                    "description": description,

                    "content": content,

                    "author": author,

                    "source": source,

                    "published_at": published_at,

                    "image_url": image_url,

                    "url": article_url,

                }

            )

        db.commit()

        return collected_articles

    except requests.RequestException as error:

        print(f"News API Error: {error}")

        db.rollback()

        return []

    finally:

        db.close()