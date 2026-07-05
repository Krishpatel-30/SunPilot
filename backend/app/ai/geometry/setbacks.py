from app.ai.geometry.polygon import (
    Point,
    RoofPolygon,
)


class RoofSetback:

    def __init__(
        self,
        setback=0.30,
    ):
        self.setback = setback

    def apply(
        self,
        roof: RoofPolygon,
    ) -> RoofPolygon:

        center_x = sum(
            p.x for p in roof.points
        ) / len(roof.points)

        center_y = sum(
            p.y for p in roof.points
        ) / len(roof.points)

        new_points = []

        for point in roof.points:

            dx = center_x - point.x
            dy = center_y - point.y

            length = (dx**2 + dy**2) ** 0.5

            if length == 0:
                new_points.append(point)
                continue

            new_points.append(
                Point(
                    point.x + dx / length * self.setback,
                    point.y + dy / length * self.setback,
                )
            )

        return RoofPolygon(new_points)


roof_setback = RoofSetback()