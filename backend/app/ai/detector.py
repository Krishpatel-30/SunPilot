from pathlib import Path

from ultralytics import YOLO


BASE_DIR = Path(__file__).resolve().parent

UPLOAD_DIR = BASE_DIR / "uploads"
RESULT_DIR = BASE_DIR / "results"

UPLOAD_DIR.mkdir(exist_ok=True)
RESULT_DIR.mkdir(exist_ok=True)


class RoofDetector:

    def __init__(self):
        self.model = YOLO("yolov8n.pt")

    def detect(self, image_path: str):

        results = self.model.predict(
            image_path,
            save=False,
            conf=0.25,
        )

        result = results[0]

        annotated = result.plot()

        output_path = (
            RESULT_DIR /
            Path(image_path).name
        )

        import cv2

        cv2.imwrite(
            str(output_path),
            annotated,
        )

        detections = []

        for box in result.boxes:

            detections.append(
                {
                    "class": int(box.cls),
                    "confidence": float(box.conf),
                    "bbox": box.xyxy.tolist()[0],
                }
            )

        return {
            "result_image": str(output_path),
            "detections": detections,
        }


detector = RoofDetector()