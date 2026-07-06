from pydantic import BaseModel
from typing import Optional


class AnalyticsEventRequest(BaseModel):
    """
    Generic analytics event request.
    """

    event_type: str
    company: str
    company_2: Optional[str] = None