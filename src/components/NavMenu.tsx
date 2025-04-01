import { Cloud } from "lucide-react";
import colors from 'tailwindcss/colors'
import { ModeToggle } from "./mode-toggle";
export function NavMenu() {
	return (
    <div className="flex mx-auto py-6 px-12 justify-between items-center w-screen bg-gray-50 dark:bg-gray-900 ">
      <div className="flex items-center gap-1">
        <Cloud fill={colors.sky[500]} stroke='false' size={35} />
        <strong className="font-poppins">WeatherApp</strong>
      </div>
      <div>
        <ModeToggle />
      </div>

    </div>
 )
}
