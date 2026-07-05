import cv2


def largest_contour(edge_image):

    contours, _ = cv2.findContours(
        edge_image,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE,
    )

    if not contours:
        return None

    return max(
        contours,
        key=cv2.contourArea,
    )