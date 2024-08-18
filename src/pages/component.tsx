import Page from "@/components/Page";
import PokemonGrid from "@/components/PokemonGrid";
import { PokemonItem } from "@/repositories/graphql";

type Props = {
  pokemonItems: PokemonItem[] | undefined;
};

const Component = ({ pokemonItems }: Props) => {
  return (
    <Page title="pokedex" description="pokedexのトップページ">
      <PokemonGrid pokemonItems={pokemonItems ?? []} />;
    </Page>
  );
};

export default Component;
