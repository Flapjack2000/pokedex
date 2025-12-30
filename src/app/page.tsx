import { Pokemon, PokemonClient } from "pokenode-ts";

export default async function Pokedex() {
  const api = new PokemonClient();
  const pikachu: Pokemon = await api.getPokemonByName("Pikachu")

  return (
    <div className="flex flex-col items-center justify-center">

      <p className="font-bold">{pikachu.name}</p>

      {pikachu.abilities.map((ability, index) => (
        <p key={index}>{ability.ability.name}</p>
      ))}

    </div>
  )
}