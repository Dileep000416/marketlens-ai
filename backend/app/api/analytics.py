from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.analytics import AnalyticsEventRequest

from app.services.analytics.analytics_service import (
    track_event,
    get_platform_stats,
    get_trending_companies,
    get_most_compared,
    get_recent_searches,
    get_executive_summary,
    get_dashboard_analytics,
)

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


# ---------------------------------------------------------
# Generic Analytics Event
# ---------------------------------------------------------

@router.post("/event")
def analytics_event(
    event: AnalyticsEventRequest,
    db: Session = Depends(get_db),
):

    track_event(
        db=db,
        event_type=event.event_type,
        company=event.company,
        company_2=event.company_2,
    )

    return {
        "success": True,
        "message": "Analytics event recorded."
    }


# ---------------------------------------------------------
# Platform Statistics
# ---------------------------------------------------------

@router.get("/platform")
def platform_stats(
    db: Session = Depends(get_db),
):
    return get_platform_stats(db)


# ---------------------------------------------------------
# Trending Companies
# ---------------------------------------------------------

@router.get("/trending")
def trending_companies(
    limit: int = 5,
    db: Session = Depends(get_db),
):
    return get_trending_companies(
        db=db,
        limit=limit,
    )


# ---------------------------------------------------------
# Most Compared Companies
# ---------------------------------------------------------

@router.get("/most-compared")
def most_compared(
    limit: int = 5,
    db: Session = Depends(get_db),
):
    return get_most_compared(
        db=db,
        limit=limit,
    )


# ---------------------------------------------------------
# Recent Searches
# ---------------------------------------------------------

@router.get("/recent-searches")
def recent_searches(
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return get_recent_searches(
        db=db,
        limit=limit,
    )


# ---------------------------------------------------------
# Executive Summary
# ---------------------------------------------------------

@router.get("/executive-summary")
def executive_summary(
    db: Session = Depends(get_db),
):
    return get_executive_summary(db)


# ---------------------------------------------------------
# Dashboard Analytics
# ---------------------------------------------------------

@router.get("/dashboard")
def analytics_dashboard(
    db: Session = Depends(get_db),
):
    return get_dashboard_analytics(db)