from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime,
    ForeignKey,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=False,
    )

    project_name = Column(
        String,
        nullable=False,
    )

    project_type = Column(
        String,
        nullable=False,
    )

    roof_type = Column(
        String,
        nullable=False,
    )

    monthly_bill = Column(
        Float,
        nullable=False,
    )

    address = Column(
        String,
        nullable=True,
    )

    city = Column(
        String,
        nullable=True,
    )

    state = Column(
        String,
        nullable=True,
    )

    country = Column(
        String,
        nullable=True,
    )

    status = Column(
        String,
        default="Draft",
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    # Relationship with Customer
    customer = relationship(
        "Customer",
        back_populates="projects",
    )

    # Relationship with Images
    images = relationship(
        "ProjectImage",
        back_populates="project",
        cascade="all, delete-orphan",
    )