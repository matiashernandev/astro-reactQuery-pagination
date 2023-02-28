import { useQuery } from "react-query";

export default function usePlanets(page) {
	const getPlanets = async (page) => {
		const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
		return response.json();
	};
	const query = useQuery(["PLANETS", page], () => getPlanets(page), {
		keepPreviousData: true,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 5,

		//placeholderData
		//initialData

		placeholderData: {
			results: [
				{
					name: "Tatooine",
					climate: "arid",
					population: "200000",
				},
				{
					name: "Tatooine",
					climate: "arid",
					population: "200000",
				},
			],
		},
	});

	return query;
}
