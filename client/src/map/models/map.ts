export interface ICity {
  name: string;
  lat: number;
  long: number;
}

export interface Forecast {
  day: Date;
  temperature: number;
}
