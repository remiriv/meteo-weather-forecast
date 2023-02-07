import axios from "axios";
import { DailyInfo, Forecast } from "../models/forecast";
import { forecastApiUrl } from "../constants";

export const getOpenWeatherForecast = async (lat: number, long: number) => {
  const appId = process.env.APP_ID || "";

  const response = await axios
    .get(
      `${forecastApiUrl}?lat=${lat}&lon=${long}&appId=${appId}&exclude=minutely,hourly,current&units=metric`
    )
    .catch((error) => {
      if (error.response.status === 401) {
        throw new Error(error.response.data?.message || "Unauthorized request");
      }
    });

  const dailyTemps: Forecast[] = response?.data.daily.map(
    (info: DailyInfo) => ({
      day: new Date(info.dt * 1000),
      temperature: info.temp.day,
    })
  );
  return dailyTemps;
};
