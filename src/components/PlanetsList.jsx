import { useState } from "react";
import usePlanets from "../hooks/usePlanets.jsx";
//import { useQuery } from "react-query";

import CardPlanet from "./CardPlanet";

export default function PlanetsList() {
	let [page, setPage] = useState(1);

	const query = usePlanets(page);

	let handleDecrementPage = () => setPage((old) => Math.max(1, old - 1));
	let handleIncrementPage = () => setPage((old) => old + 1);

	if (query.isLoading) {
		return <h2>Loading planets...</h2>;
	}
	if (query.isError) {
		//		throw new Error("Hubo un error al cargar los planetas");
		return <h2>Errorrrrrrrrrrrrr</h2>;
	}
	return (
		<>
			{query.data.results.map((element, index) => {
				return (
					<CardPlanet
						key={index + 1}
						planetId={index + 1}
						name={element.name}
						population={element.population}
						climate={element.climate}
					/>
				);
			})}
			<div className="pagination">
				<button onClick={handleDecrementPage}>🠐 Prev</button>
				<button onClick={handleIncrementPage}>Next 🠒</button>
			</div>
		</>
	);
}
