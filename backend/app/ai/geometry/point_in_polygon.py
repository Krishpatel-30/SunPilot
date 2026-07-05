from app.ai.geometry.polygon import Point, RoofPolygon


def point_in_polygon(
    point: Point,
    polygon: RoofPolygon,
) -> bool:
    """
    Ray-casting algorithm.
    Returns True if the point is inside the polygon.
    """

    inside = False

    points = polygon.points
    n = len(points)

    j = n - 1

    for i in range(n):

        xi = points[i].x
        yi = points[i].y

        xj = points[j].x
        yj = points[j].y

        intersects = (
            (yi > point.y) != (yj > point.y)
        ) and (
            point.x
            < (xj - xi)
            * (point.y - yi)
            / ((yj - yi) + 1e-9)
            + xi
        )

        if intersects:
            inside = not inside

        j = i

    return inside