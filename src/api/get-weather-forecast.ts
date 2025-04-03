import { api } from "../lib/axios";

export interface GetWeatherForecastBody {
  lat: string;
  lon: string;
  state?: string;
}

export interface GetWeatherForecastResponse {
  list?: {
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
    dt_txt: string;
    adminCodes1: {
      ISO3166_2: string
    }
  }[];
}

export async function getWeatherForecast({ lat, lon }: GetWeatherForecastBody) {
  const response = await api.get<GetWeatherForecastResponse>("forecast", {
    params: {
      lat: lat,
      lon: lon,
      appid: import.meta.env.VITE_API_KEY,
      units: "metric",
    },
  });

  return response.data;
}
