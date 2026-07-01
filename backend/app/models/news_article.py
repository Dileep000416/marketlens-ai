from datetime import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
)

from app.database.base import Base


class NewsArticle(Base):
    """
    Stores news articles collected from NewsAPI.

    This model acts as the primary knowledge source
    for the Intelligence Engine.

    Future platform features such as:

    • Compare Engine
    • Recommendation Engine
    • Intelligence Timeline
    • Search Analytics

    will reuse this data.
    """

    __tablename__ = "news_articles"

    # -------------------------------------------------
    # Primary Key
    # -------------------------------------------------

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    # -------------------------------------------------
    # Company
    # -------------------------------------------------

    competitor_name = Column(
        String(150),
        nullable=False,
        index=True,
    )

    # -------------------------------------------------
    # Article Information
    # -------------------------------------------------

    title = Column(
        String(500),
        nullable=False,
    )

    description = Column(
        Text,
        nullable=True,
    )

    content = Column(
        Text,
        nullable=True,
    )

    author = Column(
        String(255),
        nullable=True,
    )

    source = Column(
        String(255),
        nullable=True,
    )

    published_at = Column(
        String(100),
        nullable=True,
    )

    image_url = Column(
        String(1000),
        nullable=True,
    )

    url = Column(
        String(1000),
        unique=True,
        nullable=False,
    )

    # -------------------------------------------------
    # Internal Tracking
    # -------------------------------------------------

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )