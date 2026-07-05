from datetime import datetime
from pydantic import BaseModel


class ProjectImageBase(BaseModel):
    project_id: int


class ProjectImageCreate(ProjectImageBase):
    pass


class ProjectImageResponse(ProjectImageBase):
    id: int
    filename: str
    filepath: str
    uploaded_at: datetime

    class Config:
        from_attributes = True