import { useState } from "react";
import usePlanets from "../hooks/usePlanets.jsx";
import CardPlanet from "./CardPlanet";

export default function PlanetsList() {
	const [page, setPage] = useState(1);

	const { isError, isLoading, data } = usePlanets(page);

	const handlePrevPageClick = () => setPage((old) => Math.max(1, old - 1)); // mínimo 1
	const handleNextPageClick = () => setPage((old) => Math.min(6, old + 1)); // máximo 6

	if (isLoading) {
		return <h2>Loading planets...</h2>;
	}
	if (isError) {
		return <h2>Errorrrrrrrrrrrrr</h2>;
	}
	//! Warning: Prop `disabled` did not match. Server: "null" Client: "true"
	const isFirstPage = page === 1;
	const isLastPage = page === 6;

	return (
		<>
			<div className="pagination">
				<button
					disabled={isFirstPage}
					className={`${isFirstPage ? " disabledBtn" : ""}`}
					onClick={handlePrevPageClick}
				>
					🠐 Prev
				</button>
				<button
					disabled={isLastPage}
					className={`${isLastPage ? " disabledBtn" : ""}`}
					onClick={handleNextPageClick}
				>
					Next 🠒
				</button>
			</div>
			{data.results.map((element, index) => (
				<CardPlanet
					key={index + 1}
					planetId={index + 1}
					name={element.name}
					population={element.population}
					climate={element.climate}
				/>
			))}
		</>
	);
}
