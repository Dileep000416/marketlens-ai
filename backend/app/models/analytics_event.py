from datetime import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
)

from app.database.base import Base


class AnalyticsEvent(Base):
    """
    Stores platform analytics events.

    Examples:
    - Dashboard searches
    - Company comparisons
    - Recommendation clicks
    """

    __tablename__ = "analytics_events"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    event_type = Column(
        String(100),
        nullable=False,
        index=True,
    )

    company = Column(
        String(150),
        nullable=False,
        index=True,
    )

    company_2 = Column(
        String(150),
        nullable=True,
        index=True,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )