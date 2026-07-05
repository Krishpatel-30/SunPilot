from dataclasses import dataclass


@dataclass
class Point:
    x: float
    y: float


class RoofPolygon:

    def __init__(self, points: list[Point]):
        self.points = points

    def bounding_box(self):

        xs = [p.x for p in self.points]
        ys = [p.y for p in self.points]

        return (
            min(xs),
            min(ys),
            max(xs),
            max(ys),
        )

    def area(self):

        area = 0

        n = len(self.points)

        for i in range(n):

            j = (i + 1) % n

            area += (
                self.points[i].x
                * self.points[j].y
            )

            area -= (
                self.points[j].x
                * self.points[i].y
            )

        return abs(area) / 2