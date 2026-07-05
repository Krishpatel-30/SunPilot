from app.ai.geometry.polygon import (
    Point,
    RoofPolygon,
)

from app.ai.geometry.panel_placement import (
    placement_engine,
)

from app.ai.geometry.setbacks import (
    roof_setback,
)

roof = RoofPolygon(
    [
        Point(0, 0),
        Point(12, 0),
        Point(10, 8),
        Point(2, 8),
    ]
)

# Apply roof setback
roof = roof_setback.apply(roof)

panels = placement_engine.generate(roof)

print("Roof Area:", roof.area())
print("Panels:", len(panels))

for panel in panels:
    print(panel)