import { useState, useEffect } from "react";

const AddPokemon = ({ url, pokemon, setPokemon }) => {
	const [isAdding, setIsAdding] = useState(false);
	const [name, setName] = useState("");
	const [id, setId] = useState("");

	const handleAddPokemon = () => {
		setPokemon([
			...pokemon,
			{ name, url: `https://pokeapi.co/api/v2/pokemon/${id}/` },
		]);
		setIsAdding(false);
	};
	return (
		<>
			<div className="w-fit mx-auto my-4 px-2 py-1 bg-black text-white rounded-sm shadow-sm shadow-slate-300 cursor-pointer">
				<p onClick={() => setIsAdding(true)}>Add Pokemon</p>
			</div>
			{isAdding && (
				<>
					<div
						onClick={() => setIsAdding(false)}
						className="z-10 fixed top-0 left-0 bg-black opacity-25 h-screen w-screen"
					></div>
					<form className="z-10 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit p-4 bg-white rounded-md">
						<p className="mb-4 font-semibold text-center text-lg">
							New Random Pokemon
						</p>
						<div className="flex gap-2 w-full">
							<label className="w-1/4">ID :</label>
							<input
								type="text"
								className="w-3/4 bg-slate-300 border-b-2 px-2 py-1 border-black rounded-sm focus:outline-none"
								onChange={(e) => setId(parseInt(e.target.value))}
							/>
						</div>
						<button
							type="button"
							className="w-full mt-2 py-1 bg-black text-white rounded-sm"
							onClick={handleAddPokemon}
						>
							Add
						</button>
					</form>
				</>
			)}
		</>
	);
};

export default AddPokemon;
