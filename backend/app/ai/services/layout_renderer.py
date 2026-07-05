import cv2

from app.ai.services.panel_layout import SolarPanel


def draw_layout(
    image_path: str,
    panels: list[SolarPanel],
    output_path: str,
):
    image = cv2.imread(image_path)

    if image is None:
        raise ValueError("Unable to read image.")

    height, width = image.shape[:2]

    # Temporary scale (we'll replace this with real roof scaling later)
    scale_x = width / 12
    scale_y = height / 8

    for panel in panels:

        x1 = int(panel.x * scale_x)
        y1 = int(panel.y * scale_y)

        x2 = int((panel.x + panel.width) * scale_x)
        y2 = int((panel.y + panel.height) * scale_y)

        cv2.rectangle(
            image,
            (x1, y1),
            (x2, y2),
            (0, 255, 0),
            2,
        )

        cv2.putText(
            image,
            "PV",
            (x1 + 5, y1 + 18),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            (255, 255, 255),
            1,
        )

    cv2.imwrite(output_path, image)