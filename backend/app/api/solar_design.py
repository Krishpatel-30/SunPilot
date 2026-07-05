from pathlib import Path

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.deps import get_db

from app.models.project import Project
from app.models.project_image import ProjectImage

from app.ai.services.panel_layout import layout_engine
from app.ai.services.layout_renderer import draw_layout

from app.ai.engineering.system_size import (
    system_size_engine,
)

from app.ai.engineering.energy import (
    energy_engine,
)

from app.ai.engineering.roi import (
    roi_engine,
)

router = APIRouter(
    prefix="/solar",
    tags=["Solar Design"],
)


@router.post("/generate/{project_id}")
def generate_design(
    project_id: int,
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
            detail="Project not found.",
        )

    image = (
        db.query(ProjectImage)
        .filter(ProjectImage.project_id == project_id)
        .order_by(ProjectImage.id.desc())
        .first()
    )

    if not image:
        raise HTTPException(
            status_code=404,
            detail="No roof image uploaded.",
        )

    image_path = Path(image.filepath)

    if not image_path.exists():
        raise HTTPException(
            status_code=404,
            detail="Image file not found.",
        )

    # Generate Layout
    panels = layout_engine.generate_layout(
        roof_width=12,
        roof_height=8,
    )

    panel_count = len(panels)

    # Engineering
    system = system_size_engine.calculate(
        panel_count
    )

    energy = energy_engine.estimate(
        system["system_size_kw"]
    )

    roi = roi_engine.calculate(
        energy["annual_kwh"]
    )

    # Draw Layout
    output = image_path.parent / f"layout_{image_path.name}"

    draw_layout(
        str(image_path),
        panels,
        str(output),
    )

    return {
        "status": "success",

        "panel_count": panel_count,

        "panel_power": system["panel_power"],

        "system_size_kw": system["system_size_kw"],

        "daily_energy": energy["daily_kwh"],

        "monthly_energy": energy["monthly_kwh"],

        "annual_energy": energy["annual_kwh"],

        "annual_savings": roi["annual_savings"],

        "payback_years": roi["payback_years"],

        "layout_image": str(output),
    }