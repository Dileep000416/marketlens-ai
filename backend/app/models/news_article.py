from sqlalchemy import Column, Integer, String

from app.database.base import Base


class NewsArticle(Base):
    __tablename__ = "news_articles"

    id = Column(Integer, primary_key=True, index=True)

    competitor_name = Column(String, nullable=False)

    title = Column(String, nullable=False)

    source = Column(String)

    url = Column(String)