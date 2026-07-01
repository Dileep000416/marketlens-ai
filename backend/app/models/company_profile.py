from sqlalchemy import Column, Integer, String

from app.database.base import Base


class CompanyProfile(Base):
    __tablename__ = "company_profiles"

    id = Column(Integer, primary_key=True, index=True)

    company_name = Column(String, unique=True, index=True)

    description = Column(String)

    website = Column(String)

    linkedin = Column(String)

    industry = Column(String)

    headquarters = Column(String)

    logo = Column(String)