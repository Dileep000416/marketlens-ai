from sqlalchemy import func, desc
from sqlalchemy.orm import Session

from app.models.analytics_event import AnalyticsEvent


# ---------------------------------------------------------
# Record Analytics Events
# ---------------------------------------------------------

def track_event(
    db: Session,
    event_type: str,
    company: str,
    company_2: str | None = None,
):
    """
    Stores a platform analytics event.

    Supported event types:

    • search
    • compare
    • recommendation_click
    """

    event = AnalyticsEvent(
        event_type=event_type,
        company=company,
        company_2=company_2,
    )

    db.add(event)
    db.commit()


# ---------------------------------------------------------
# Platform Statistics
# ---------------------------------------------------------

def get_platform_stats(db: Session):
    """
    Returns overall platform statistics.
    """

    total_searches = (
        db.query(AnalyticsEvent)
        .filter(
            AnalyticsEvent.event_type == "search"
        )
        .count()
    )

    total_comparisons = (
        db.query(AnalyticsEvent)
        .filter(
            AnalyticsEvent.event_type == "compare"
        )
        .count()
    )

    total_recommendation_clicks = (
        db.query(AnalyticsEvent)
        .filter(
            AnalyticsEvent.event_type == "recommendation_click"
        )
        .count()
    )

    return {
        "total_searches": total_searches,
        "total_comparisons": total_comparisons,
        "total_recommendation_clicks": total_recommendation_clicks,
    }


# ---------------------------------------------------------
# Trending Companies
# ---------------------------------------------------------

def get_trending_companies(
    db: Session,
    limit: int = 5,
):
    """
    Returns the most searched companies.
    """

    results = (
        db.query(
            AnalyticsEvent.company,
            func.count(
                AnalyticsEvent.id
            ).label("count"),
        )
        .filter(
            AnalyticsEvent.event_type == "search"
        )
        .group_by(
            AnalyticsEvent.company
        )
        .order_by(
            func.count(
                AnalyticsEvent.id
            ).desc()
        )
        .limit(limit)
        .all()
    )

    return [
        {
            "company": company,
            "searches": count,
        }
        for company, count in results
    ]


# ---------------------------------------------------------
# Most Compared Companies
# ---------------------------------------------------------

def get_most_compared(
    db: Session,
    limit: int = 5,
):
    """
    Returns the most frequently compared company pairs.
    """

    results = (
        db.query(
            AnalyticsEvent.company,
            AnalyticsEvent.company_2,
            func.count(
                AnalyticsEvent.id
            ).label("count"),
        )
        .filter(
            AnalyticsEvent.event_type == "compare"
        )
        .group_by(
            AnalyticsEvent.company,
            AnalyticsEvent.company_2,
        )
        .order_by(
            func.count(
                AnalyticsEvent.id
            ).desc()
        )
        .limit(limit)
        .all()
    )

    return [
        {
            "company_1": company,
            "company_2": company_2,
            "comparisons": count,
        }
        for company, company_2, count in results
    ]


# ---------------------------------------------------------
# Recent Search Activity
# ---------------------------------------------------------

def get_recent_searches(
    db: Session,
    limit: int = 10,
):
    """
    Returns the most recent dashboard searches.
    """

    events = (
        db.query(AnalyticsEvent)
        .filter(
            AnalyticsEvent.event_type == "search"
        )
        .order_by(
            desc(
                AnalyticsEvent.created_at
            )
        )
        .limit(limit)
        .all()
    )

    return [
        {
            "company": event.company,
            "searched_at": event.created_at,
        }
        for event in events
    ]


# ---------------------------------------------------------
# Executive Summary
# ---------------------------------------------------------

def get_executive_summary(
    db: Session,
):
    """
    Returns a high-level executive summary
    of platform activity.
    """

    platform = get_platform_stats(db)

    trending = get_trending_companies(
        db=db,
        limit=1,
    )

    compared = get_most_compared(
        db=db,
        limit=1,
    )

    return {

        "platform": platform,

        "most_popular_company": (
            trending[0]["company"]
            if trending
            else None
        ),

        "most_compared_pair": (
            compared[0]
            if compared
            else None
        ),

    }


# ---------------------------------------------------------
# Analytics Dashboard
# ---------------------------------------------------------

def get_dashboard_analytics(
    db: Session,
):
    """
    Returns the complete analytics dashboard
    payload for the frontend.
    """

    return {

        "platform": get_platform_stats(db),

        "trending_companies": get_trending_companies(db),

        "most_compared": get_most_compared(db),

        "recent_searches": get_recent_searches(db),

        "executive_summary": get_executive_summary(db),

    }