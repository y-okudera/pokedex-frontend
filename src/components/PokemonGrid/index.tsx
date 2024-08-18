import { PokemonItem } from "@/repositories/graphql";
import Component from "./component";

const PokemonGrid = ({ pokemonItems }: { pokemonItems: PokemonItem[] }) => {
  return <Component pokemonItems={pokemonItems} />;
};

export default PokemonGrid;
