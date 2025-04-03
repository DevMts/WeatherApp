import { Toaster } from "sonner"
import { Footer } from "./components/Footer"
import { Main } from "./components/main/main"
import { NavMenu } from "./components/navmenu"
import { ThemeProvider } from "./components/themes/theme-provider"
import { Separator } from "./components/ui/separator"

export function App() {
	return (
		<ThemeProvider>
			<NavMenu />
			<Separator />
			<Main />
			<Separator /> 
			 <Footer />
			 <Toaster richColors />
		</ThemeProvider>
	)
}
