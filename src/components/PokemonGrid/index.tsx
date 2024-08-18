import { PokemonItem } from "@/repositories/graphql";
import Component from "./component";

const PokemonGrid = ({
  pokemonItems,
  lastItemRef,
}: {
  pokemonItems: PokemonItem[];
  lastItemRef: (node: HTMLDivElement | null) => void;
}) => {
  return <Component pokemonItems={pokemonItems} lastItemRef={lastItemRef} />;
};

export default PokemonGrid;
