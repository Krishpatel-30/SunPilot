from fastapi import FastAPI
from sqlalchemy import text
from app.database.database import Base, engine
from app.models.user import User
from app.database.database import engine

app = FastAPI(
    title="SunPilot API",
    version="1.0.0"
)
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