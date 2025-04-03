import { Toaster } from "sonner"
import { Footer } from "./components/Footer"
import { Main } from "./components/main/main"
import { NavMenu } from "./components/navmenu"
import { ThemeProvider } from "./components/themes/theme-provider"
import { Separator } from "./components/ui/separator"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

export function App() {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<NavMenu />
				<Separator />
				<Main />
				<Separator />
				<Footer />
				<Toaster richColors />
			</QueryClientProvider>
		</ThemeProvider>
	)
}
