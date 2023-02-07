export interface Forecast {
  day: Date
  temperature: number 
}

export interface Temperature {
  day: number
  min: number
  max: number
}

export interface DailyInfo {
  dt: number
  temp: Temperature
}

export interface OpenWeatherResponse {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number,
  daily: DailyInfo[]
}

