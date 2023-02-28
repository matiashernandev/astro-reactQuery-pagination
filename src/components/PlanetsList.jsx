import { useState } from "react";
import { useQuery } from "react-query";

import CardPlanet from "./CardPlanet";

let getPlanets = async (page) => {
	let response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
	return response.json();
};

export default function PlanetsList() {
	let [page, setPage] = useState(1);
	let query = useQuery(["PLANETS", page], () => getPlanets(page), {
		keepPreviousData: true,
	});
	console.log(query);
	let handleDecrementPage = () => setPage((old) => Math.max(1, old - 1));
	let handleIncrementPage = () => setPage((old) => old + 1);

	console.log(page);

	if (query.isLoading) {
		return <h2>Loading planets...</h2>;
	}
	if (query.isError) {
		throw new Error("Hubo un error al cargar los planetas");
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
