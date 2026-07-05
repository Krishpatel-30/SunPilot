class ROICalculator:

    def calculate(
        self,
        annual_energy: float,
        electricity_rate: float = 8.0,
        system_cost: float = 500000,
    ):

        annual_savings = (
            annual_energy
            * electricity_rate
        )

        payback = (
            system_cost
            / annual_savings
            if annual_savings > 0
            else 0
        )

        return {
            "annual_savings": round(
                annual_savings,
                2,
            ),
            "payback_years": round(
                payback,
                1,
            ),
        }


roi_engine = ROICalculator()