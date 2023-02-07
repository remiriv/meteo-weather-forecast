import { ICity } from "../models/map";

export const franceCenter = {
  lat: 46.227638,
  long: 2.213749,
};

export const cities: ICity[] = [
  {
    name: "Toulouse",
    lat: 43.604652,
    long: 1.444209,
  },
  {
    name: "Paris",
    lat: 48.866667,
    long: 2.333333,
  },
];

export const maxDaysForecast =
  parseInt(process.env.REACT_APP_MAX_DAYS_FORECAST || "") || 3;

export const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";
