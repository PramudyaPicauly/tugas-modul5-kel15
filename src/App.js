//Library
import { useState, useEffect } from "react";
import axios from "axios";
//Components
import PokemonCard from "./components/PokemonCard";
import AddPokemon from "./components/AddPokemon";

function App() {
	const [pageIndex, setPageIndex] = useState(0);
	const [pokemonData, setPokemonData] = useState([]);
	const [newPokemon, setNewPokemon] = useState([]);

	const pokemonDataPagination = [
		"?offset=0&limit=10",
		"?offset=10&limit=10",
		"?offset=20&limit=10",
		"?offset=30&limit=10",
		"?offset=40&limit=10",
		"?offset=50&limit=10",
		"?offset=60&limit=10",
		"?offset=70&limit=10",
		"?offset=80&limit=10",
		"?offset=90&limit=10",
	];

	const nextPage = () => {
		setPageIndex(pageIndex + 1);
		if (pageIndex === 10) {
			setPageIndex(0);
		}
	};

	const prevPage = () => {
		setPageIndex(pageIndex - 1);
		if (pageIndex === -1) {
			setPageIndex(9);
		}
	};

	useEffect(() => {
		const getPokemon = async () => {
			await axios
				.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemonDataPagination[pageIndex]}`
				)
				.then((res) => {
					setPokemonData(res.data.results);
					console.log(res.data.results);
				})
				.catch((err) => console.log(err.message));
		};
		getPokemon();
	}, [pageIndex]);

	return (
		<div className="mx-auto my-4 w-1/3">
			<h1 className="text-center font-bold text-3xl my-2">
				PokeDex
				<sup>
					<i>Lite</i>
				</sup>
			</h1>
			<AddPokemon
				url={`https://pokeapi.co/api/v2/pokemon/${pokemonDataPagination[pageIndex]}`}
				pokemon={newPokemon}
				setPokemon={setNewPokemon}
			/>
			{newPokemon.map((value, key) => {
				return <PokemonCard key={key} data={value} />;
			})}
			{pokemonData.map((value, key) => {
				return <PokemonCard key={key} data={value} />;
			})}
			<div className="flex gap-2">
				<button
					type="button"
					className="w-1/2 mt-2 p-2 text-white bg-blue-400 rounded-sm shadow-sm shadow-slate-300"
					onClick={prevPage}
				>
					Prev
				</button>
				<button
					type="button"
					className="w-1/2 mt-2 p-2 text-white bg-blue-400 rounded-sm shadow-sm shadow-slate-300"
					onClick={nextPage}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default App;
