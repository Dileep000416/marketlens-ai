import os

from groq import Groq

from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_summary(news_articles):

    news_text = "\n".join(
        [
            article["title"]
            for article in news_articles
        ]
    )

    prompt = f"""
    Analyze these competitor news headlines and provide:

    1. Main Trends
    2. Opportunities
    3. Risks

    Headlines:

    {news_text}

    Keep response under 200 words.
    """

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content