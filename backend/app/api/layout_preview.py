from pathlib import Path

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.ai.services.panel_layout import layout_engine
from app.ai.services.layout_renderer import draw_layout

router = APIRouter(
    prefix="/layout-preview",
    tags=["Solar Preview"],
)


class PreviewRequest(BaseModel):
    image_path: str
    roof_width: float
    roof_height: float


@router.post("/")
def preview_layout(data: PreviewRequest):

    image = Path(data.image_path)

    if not image.exists():
        raise HTTPException(
            status_code=404,
            detail="Image not found."
        )

    panels = layout_engine.generate_layout(
        data.roof_width,
        data.roof_height,
    )

    output = image.parent / f"preview_{image.name}"

    draw_layout(
        str(image),
        panels,
        str(output),
    )

    return {
        "panel_count": len(panels),
        "preview_image": str(output),
    }