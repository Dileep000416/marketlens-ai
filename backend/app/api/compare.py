from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.services.compare.compare_service import (
    compare_companies,
)

router = APIRouter(
    prefix="/compare",
    tags=["Compare"],
)


@router.get("/{company_1}/{company_2}")
def compare(
    company_1: str,
    company_2: str,
    db: Session = Depends(get_db),
):
    return compare_companies(
        db,
        company_1,
        company_2,
    )