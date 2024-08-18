import { PokemonItem } from "@/repositories/graphql";
import GridItem from "./GridItem";
import Styled from "./styled";

const Component = ({ pokemonItems }: { pokemonItems: PokemonItem[] }) => {
  return (
    <Styled.PokemonsList>
      {!!pokemonItems &&
        pokemonItems.map((item) => <GridItem key={item.id} item={item} />)}
    </Styled.PokemonsList>
  );
};

export default Component;
