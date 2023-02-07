import axios from "axios";
import { backendUrl } from "../constants/map";
import { ICity } from "../models/map";

export const getWeatherForecast = async (city: ICity) => {
  const response = await axios.get(`${backendUrl}/forecast/daily`, {
    params: { lat: city.lat, long: city.long },
  });
  if (response?.data) {
    return response.data.forecast;
  }
  return [];
};
