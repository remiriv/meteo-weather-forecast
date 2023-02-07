import { Request, Response } from "express";
import { z } from "zod";
import { getOpenWeatherForecast } from "../api/openWeather";
import { Forecast } from "../models/forecast";

export { getForecast };

const getForecast = async (request: Request, response: Response) => {
  const querySchema = z.object({
    lat: z.string().transform(Number),
    long: z.string().transform(Number),
  });

  try {
    const { lat, long } = querySchema.parse(request.query);
    const temps: Forecast[] = await getOpenWeatherForecast(lat, long);
    return response.status(200).json({ forecast: temps });
  } catch (error) {
    response
      .status(400)
      .json({
        err: "Failed to retrieve temperature data for this lat & long.",
      });
  }
};
