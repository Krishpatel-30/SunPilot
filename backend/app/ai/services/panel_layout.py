from dataclasses import dataclass


@dataclass
class SolarPanel:
    x: float
    y: float
    width: float
    height: float


class PanelLayoutEngine:

    def __init__(
        self,
        panel_width: float = 1.13,
        panel_height: float = 2.28,
        spacing: float = 0.20,
    ):
        self.panel_width = panel_width
        self.panel_height = panel_height
        self.spacing = spacing

    def generate_layout(
        self,
        roof_width: float,
        roof_height: float,
    ):

        panels = []

        y = self.spacing

        while y + self.panel_height <= roof_height:

            x = self.spacing

            while x + self.panel_width <= roof_width:

                panels.append(
                    SolarPanel(
                        x=x,
                        y=y,
                        width=self.panel_width,
                        height=self.panel_height,
                    )
                )

                x += self.panel_width + self.spacing

            y += self.panel_height + self.spacing

        return panels


layout_engine = PanelLayoutEngine()