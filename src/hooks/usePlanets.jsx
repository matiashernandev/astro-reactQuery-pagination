import { useQuery } from "react-query";

export default function usePlanets(page) {
	const getPlanets = async (page) => {
		let response = await fetch(`https://swapi.dev/api/plans/?page=${page}`);
		return response.json();
	};
	const query = useQuery(["PLANETS", page], () => getPlanets(page), {
		keepPreviousData: true,
	});

	return query;
}
