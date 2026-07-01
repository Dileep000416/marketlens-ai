from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.services.dashboard_service import get_dashboard_data

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/{company_name}")
def dashboard(
    company_name: str,
    db: Session = Depends(get_db)
):
    """
    Dashboard Endpoint

    The dashboard service is responsible for:

    • Checking the database
    • Fetching latest news if necessary
    • Generating AI insights
    • Calculating activity score
    • Returning dashboard data
    """

    return get_dashboard_data(
        db=db,
        company_name=company_name
    )