from dataclasses import dataclass


@dataclass
class SolarPanelSpec:
    power_watts: float = 550
    width: float = 1.13
    height: float = 2.28


class SystemSizeCalculator:

    def __init__(self):
        self.panel = SolarPanelSpec()

    def calculate(self, panel_count: int):

        system_size_kw = (
            panel_count * self.panel.power_watts
        ) / 1000

        return {
            "panel_count": panel_count,
            "panel_power": self.panel.power_watts,
            "system_size_kw": round(system_size_kw, 2),
        }


system_size_engine = SystemSizeCalculator()