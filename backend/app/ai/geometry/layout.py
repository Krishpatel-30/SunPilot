from app.ai.geometry.polygon import (
    RoofPolygon,
)


class GeometryLayout:

    def generate(
        self,
        roof: RoofPolygon,
    ):

        min_x, min_y, max_x, max_y = roof.bounding_box()

        return {
            "roof_area": roof.area(),
            "width": max_x - min_x,
            "height": max_y - min_y,
        }


geometry_layout = GeometryLayout()