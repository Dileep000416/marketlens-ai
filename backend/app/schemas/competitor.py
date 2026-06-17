from pydantic import BaseModel


class CompetitorCreate(BaseModel):
    name: str
    industry: str
    website: str


class CompetitorResponse(BaseModel):
    id: int
    name: str
    industry: str
    website: str

    class Config:
        from_attributes = True