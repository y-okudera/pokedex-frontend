import PokemonGrid from "@/components/PokemonGrid";
import { PokemonItem } from "@/repositories/graphql";

type Props = {
  pokemonItems: PokemonItem[] | undefined;
};

const Component = ({ pokemonItems }: Props) => {
  return <PokemonGrid pokemonItems={pokemonItems ?? []} />;
};

export default Component;
