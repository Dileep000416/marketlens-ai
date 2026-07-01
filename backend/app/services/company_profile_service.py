from sqlalchemy.orm import Session

from app.models.company_profile import CompanyProfile


def get_cached_company_profile(
    db: Session,
    company_name: str
):
    return (
        db.query(CompanyProfile)
        .filter(
            CompanyProfile.company_name == company_name
        )
        .first()
    )


def save_company_profile(
    db: Session,
    profile_data: dict
):
    profile = CompanyProfile(
        company_name=profile_data["company_name"],
        description=profile_data.get("description"),
        website=profile_data.get("website"),
        linkedin=profile_data.get("linkedin"),
        industry=profile_data.get("industry"),
        headquarters=profile_data.get("headquarters"),
        logo=profile_data.get("logo"),
    )

    db.add(profile)

    db.commit()

    db.refresh(profile)

    return profile