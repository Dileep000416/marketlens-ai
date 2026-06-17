from sqlalchemy import Column, Integer, String

from app.database.base import Base


class Competitor(Base):
    __tablename__ = "competitors"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    industry = Column(String)

    website = Column(String)