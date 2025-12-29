import { Pokemon, PokemonClient } from "pokenode-ts";

export default async function Pokedex() {
  const api = new PokemonClient();
  const pikachu: Pokemon = await api.getPokemonByName("Pikachu")

  return (
    <div className="flex flex-col items-center justify-center">

      <p>{pikachu.name}</p>

    </div>
  )
}