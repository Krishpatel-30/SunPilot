from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database.database import Base


class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)

    email = Column(String, unique=True, nullable=False)

    phone = Column(String, nullable=False)

    address = Column(String, nullable=True)

    city = Column(String, nullable=True)

    state = Column(String, nullable=True)

    country = Column(String, nullable=True)

    postal_code = Column(String, nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )
    projects = relationship(
    "Project",
    back_populates="customer",
    )