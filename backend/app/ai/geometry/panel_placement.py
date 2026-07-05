from dataclasses import dataclass

from app.ai.geometry.polygon import (
    Point,
    RoofPolygon,
)

from app.ai.geometry.point_in_polygon import (
    point_in_polygon,
)


@dataclass
class Panel:
    x: float
    y: float
    width: float
    height: float


class PanelPlacement:

    PANEL_WIDTH = 1.13
    PANEL_HEIGHT = 2.28
    SPACING = 0.20

    def panel_inside_roof(
        self,
        panel: Panel,
        roof: RoofPolygon,
    ) -> bool:

        corners = [
            Point(panel.x, panel.y),
            Point(panel.x + panel.width, panel.y),
            Point(panel.x, panel.y + panel.height),
            Point(
                panel.x + panel.width,
                panel.y + panel.height,
            ),
        ]

        return all(
            point_in_polygon(corner, roof)
            for corner in corners
        )

    def generate(
        self,
        roof: RoofPolygon,
    ):

        min_x, min_y, max_x, max_y = roof.bounding_box()

        panels = []

        y = min_y + self.SPACING

        while y + self.PANEL_HEIGHT <= max_y:

            x = min_x + self.SPACING

            while x + self.PANEL_WIDTH <= max_x:

                panel = Panel(
                    x=x,
                    y=y,
                    width=self.PANEL_WIDTH,
                    height=self.PANEL_HEIGHT,
                )

                if self.panel_inside_roof(
                    panel,
                    roof,
                ):
                    panels.append(panel)

                x += self.PANEL_WIDTH + self.SPACING

            y += self.PANEL_HEIGHT + self.SPACING

        return panels


placement_engine = PanelPlacement()