import os
import requests

from dotenv import load_dotenv

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")


def fetch_news(company_name: str):

    url = "https://newsapi.org/v2/everything"

    params = {
        "q": company_name,
        "apiKey": NEWS_API_KEY,
        "language": "en",
        "pageSize": 5
    }

    response = requests.get(
        url,
        params=params
    )

    data = response.json()

    articles = []

    for article in data.get("articles", []):

        articles.append(
            {
                "title": article.get("title"),
                "source": article.get("source", {}).get("name"),
                "url": article.get("url")
            }
        )

    return articles