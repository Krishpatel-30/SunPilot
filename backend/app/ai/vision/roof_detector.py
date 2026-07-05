import cv2

from app.ai.vision.preprocess import preprocess_image
from app.ai.vision.contour import largest_contour


def detect_roof(image_path: str):

    image, edges = preprocess_image(image_path)

    contour = largest_contour(edges)

    if contour is None:
        return None

    x, y, w, h = cv2.boundingRect(contour)

    return {
        "width_px": w,
        "height_px": h,
        "area_px": w * h,
        "contour": contour.tolist(),
    }