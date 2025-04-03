import { api } from "../lib/axios";

export interface GetWeatherCurrentBody {
  lat: string;
  lon: string;
  state?: string;
}

export interface GetWeatherCurrentResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  },
  name: string,
  visibility: string,
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[]
}

export async function getWeatherCurrent({ lat, lon }: GetWeatherCurrentBody) {
  const response = await api.get<GetWeatherCurrentResponse>("weather", {
    params: {
      lat: lat,
      lon: lon,
      appid: import.meta.env.VITE_API_KEY,
      units: "metric",
      lang: "pt_br"
    },
  });

  return response.data;
}
