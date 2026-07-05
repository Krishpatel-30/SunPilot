from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text

from app.database.database import Base, engine

# Models
from app.models.user import User
from app.models.customer import Customer
from app.models.project import Project
from app.models.project_image import ProjectImage

# Routers
from app.api.auth import router as auth_router
from app.api.customer import router as customer_router
from app.api.project import router as project_router
from app.api.project_image import router as project_image_router
from app.api.layout import router as layout_router
from app.api.layout_preview import router as layout_preview_router
from app.api.solar_design import router as solar_design_router


app = FastAPI(
    title="SunPilot API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve uploaded images
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)

# Register Routers
app.include_router(auth_router)
app.include_router(customer_router)
app.include_router(project_router)
app.include_router(project_image_router)
app.include_router(layout_router)
app.include_router(layout_preview_router)
app.include_router(solar_design_router)

# Create Tables
Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {
        "message": "Welcome to SunPilot API 🚀"
    }


@app.get("/health")
def health():
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": "Connected ✅"
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "Disconnected ❌",
            "error": str(e)
        }