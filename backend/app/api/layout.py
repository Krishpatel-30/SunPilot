from fastapi import APIRouter
from pydantic import BaseModel

from app.ai.services.panel_layout import layout_engine

router = APIRouter(
    prefix="/layout",
    tags=["Solar Layout"],
)


class LayoutRequest(BaseModel):
    roof_width: float
    roof_height: float


@router.post("/generate")
def generate_layout(data: LayoutRequest):

    panels = layout_engine.generate_layout(
        roof_width=data.roof_width,
        roof_height=data.roof_height,
    )

    return {
        "roof_width": data.roof_width,
        "roof_height": data.roof_height,
        "panel_count": len(panels),
        "panels": [
            {
                "x": p.x,
                "y": p.y,
                "width": p.width,
                "height": p.height,
            }
            for p in panels
        ],
    }