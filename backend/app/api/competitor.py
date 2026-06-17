from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.competitor import (
    CompetitorCreate,
    CompetitorResponse
)

from app.services.competitor_service import (
    create_competitor,
    get_all_competitors,
    get_competitor_by_id,
    delete_competitor
)

router = APIRouter(
    prefix="/competitors",
    tags=["Competitors"]
)


@router.post(
    "/",
    response_model=CompetitorResponse
)
def add_competitor(
    competitor: CompetitorCreate,
    db: Session = Depends(get_db)
):
    return create_competitor(
        db=db,
        name=competitor.name,
        industry=competitor.industry,
        website=competitor.website
    )


@router.get(
    "/"
)
def get_competitors(
    db: Session = Depends(get_db)
):
    return get_all_competitors(
        db
    )


@router.get("/{competitor_id}")
def get_competitor(
    competitor_id: int,
    db: Session = Depends(get_db)
):
    return get_competitor_by_id(
        db,
        competitor_id
    )

@router.delete("/{competitor_id}")
def remove_competitor(
    competitor_id: int,
    db: Session = Depends(get_db)
):
    return delete_competitor(
        db,
        competitor_id
    )