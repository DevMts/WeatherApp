import type { IconType } from "react-icons"
import {
	WiDaySunny,
	WiNightClear,
	WiDayCloudy,
	WiNightAltCloudy,
	WiCloud,
	WiCloudy,
	WiShowers,
	WiDayRain,
	WiNightAltRain,
	WiThunderstorm,
	WiSnow,
	WiFog,
} from "react-icons/wi"

// Mapeia os ícones corretamente
const weatherIcons: Record<string, { icon: IconType; color: string }> = {
	"01d": { icon: WiDaySunny, color: "text-yellow-400 " }, // Sol
	"01n": { icon: WiNightClear, color: "text-blue-500 " }, // Noite limpa
	"02d": { icon: WiDayCloudy, color: "text-yellow-300 " }, // Sol com nuvens
	"02n": { icon: WiNightAltCloudy, color: "text-blue-400 " }, // Noite com nuvens
	"03d": { icon: WiCloud, color: "text-gray-400 " }, // Nublado
	"03n": { icon: WiCloud, color: "text-gray-500 " }, // Nublado à noite
	"04d": { icon: WiCloudy, color: "text-gray-500 " }, // Nuvens carregadas
	"04n": { icon: WiCloudy, color: "text-gray-600 " }, // Nuvens carregadas à noite
	"09d": { icon: WiShowers, color: "text-blue-500 " }, // Chuva leve
	"09n": { icon: WiShowers, color: "text-blue-600 " }, // Chuva leve à noite
	"10d": { icon: WiDayRain, color: "text-blue-600 " }, // Chuva forte
	"10n": { icon: WiNightAltRain, color: "text-blue-700 " }, // Chuva forte à noite
	"11d": { icon: WiThunderstorm, color: "text-purple-600 " }, // Tempestade
	"11n": { icon: WiThunderstorm, color: "text-purple-700 " }, // Tempestade à noite
	"13d": { icon: WiSnow, color: "text-cyan-400 " }, // Neve
	"13n": { icon: WiSnow, color: "text-cyan-500 " }, // Neve à noite
	"50d": { icon: WiFog, color: "text-gray-300 " }, // Névoa
	"50n": { icon: WiFog, color: "text-gray-400 " }, // Névoa à noite
}

// Componente que aceita apenas `size`
export function WeatherIcon({ iconCode, size = "24" }: { iconCode: string; size?: string }) {
  const weather = weatherIcons[iconCode];

  const Icon = weather?.icon || WiCloud;
  const color = weather?.color || "text-gray-400";

  return <Icon className={color} size={size} />;
}
