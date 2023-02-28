import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import PlanetsList from "./PlanetsList";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<header>
				<h1>
					<img
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"
						alt=""
					/>
					Planets
				</h1>
			</header>
			<main>
				<PlanetsList />
			</main>
			<footer>Made with 💖 by the Front End Team</footer>
		</QueryClientProvider>
	);
}

export default App;
