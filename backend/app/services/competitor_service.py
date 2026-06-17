from sqlalchemy.orm import Session

from app.models.competitor import Competitor


def create_competitor(
    db: Session,
    name: str,
    industry: str,
    website: str
):
    competitor = Competitor(
        name=name,
        industry=industry,
        website=website
    )

    db.add(competitor)

    db.commit()

    db.refresh(competitor)

    return competitor


def get_all_competitors(
    db: Session
):
    return db.query(
        Competitor
    ).all()

def get_competitor_by_id(
    db: Session,
    competitor_id: int
):
    return db.query(
        Competitor
    ).filter(
        Competitor.id == competitor_id
    ).first()


def delete_competitor(
    db: Session,
    competitor_id: int
):
    competitor = db.query(
        Competitor
    ).filter(
        Competitor.id == competitor_id
    ).first()

    if competitor:
        db.delete(competitor)
        db.commit()

    return competitor