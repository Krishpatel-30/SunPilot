import os
import shutil
from uuid import uuid4

from fastapi import (
    APIRouter,
    Depends,
    UploadFile,
    File,
    HTTPException,
)
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.project import Project
from app.models.project_image import ProjectImage

router = APIRouter(
    prefix="/project-images",
    tags=["Project Images"],
)

UPLOAD_FOLDER = "uploads/roof_images"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True,
)


@router.post("/{project_id}")
def upload_project_image(
    project_id: int,
    image: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    extension = image.filename.split(".")[-1]

    filename = (
        f"{uuid4()}.{extension}"
    )

    filepath = os.path.join(
        UPLOAD_FOLDER,
        filename,
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            image.file,
            buffer,
        )

    db_image = ProjectImage(
        project_id=project_id,
        filename=filename,
        filepath=filepath,
    )

    db.add(db_image)
    db.commit()
    db.refresh(db_image)

    return db_image


@router.get("/{project_id}")
def get_project_images(
    project_id: int,
    db: Session = Depends(get_db),
):

    return (
        db.query(ProjectImage)
        .filter(
            ProjectImage.project_id == project_id
        )
        .all()
    )


@router.delete("/{image_id}")
def delete_project_image(
    image_id: int,
    db: Session = Depends(get_db),
):

    image = (
        db.query(ProjectImage)
        .filter(ProjectImage.id == image_id)
        .first()
    )

    if not image:
        raise HTTPException(
            status_code=404,
            detail="Image not found",
        )

    if os.path.exists(image.filepath):
        os.remove(image.filepath)

    db.delete(image)
    db.commit()

    return {
        "message": "Image deleted successfully"
    }