import { store } from "@/stores";

import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
  return (
    <div>
      <PokemonTable pokemons={store.getState().search.startupPokemon} />
    </div>
  );
};

export default SSRPokemonTable;
