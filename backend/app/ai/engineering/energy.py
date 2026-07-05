class EnergyEstimator:

    def estimate(
        self,
        system_size_kw: float,
        sun_hours: float = 5.5,
        performance_ratio: float = 0.80,
    ):

        daily = (
            system_size_kw
            * sun_hours
            * performance_ratio
        )

        yearly = daily * 365

        monthly = yearly / 12

        return {
            "daily_kwh": round(daily, 2),
            "monthly_kwh": round(monthly, 2),
            "annual_kwh": round(yearly, 2),
        }


energy_engine = EnergyEstimator()