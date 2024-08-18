import Page from "@/components/Page";
import PokemonGrid from "@/components/PokemonGrid";
import { PokemonItem } from "@/repositories/graphql";

type Props = {
  pokemonItems: PokemonItem[] | undefined;
  lastItemRef: (node: HTMLDivElement | null) => void;
};

const Component = ({ pokemonItems, lastItemRef }: Props) => {
  return (
    <Page title="pokedex" description="pokedexのトップページ">
      <PokemonGrid
        pokemonItems={pokemonItems ?? []}
        lastItemRef={lastItemRef}
      />
    </Page>
  );
};

export default Component;
