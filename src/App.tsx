import { Main } from "./components/Main/main"
import { NavMenu } from "./components/NavMenu"
import { ThemeProvider } from "./components/themes/theme-provider"
import { Button } from "./components/ui/button"

export function App() {
	return (
		<ThemeProvider>
		<NavMenu />
		<Main />
		</ThemeProvider>
	)
}
