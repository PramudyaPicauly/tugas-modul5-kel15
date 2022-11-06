import { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ data }) => {
	const [pokemonName, setPokemonName] = useState([]);
	const [pokemonImg, setPokemonImg] = useState([]);
	const [pokemonType, setPokemonType] = useState([]);

	useEffect(() => {
		const getPokemon = async () => {
			await axios
				.get(data.url)
				.then((res) => {
					setPokemonImg(res.data.sprites.front_default);
					setPokemonName(res.data.name);
					setPokemonType(res.data.types[0].type.name);
				})
				.catch((err) => console.log(err.message));
		};
		getPokemon();
	}, [data]);

	return (
		<div className="flex gap-2 items-center w-full mt-2 p-2 bg-slate-100 rounded-sm shadow-sm shadow-slate-300">
			<img src={pokemonImg} className="w-14" />
			<div className="flex flex-col">
				<p className="capitalize font-semibold">{pokemonName}</p>
				<p className="capitalize text-xs">{`${pokemonType} Pokemon`}</p>
			</div>
		</div>
	);
};

export default PokemonCard;
