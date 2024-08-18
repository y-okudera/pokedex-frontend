import { PokemonItem } from "@/repositories/graphql";
import GridItem from "./GridItem";
import Styled from "./styled";

const Component = ({
  pokemonItems,
  lastItemRef,
}: {
  pokemonItems: PokemonItem[];
  lastItemRef: (node: HTMLDivElement | null) => void;
}) => {
  return (
    <Styled.PokemonsList>
      {!!pokemonItems &&
        pokemonItems.map((item, index) => (
          <GridItem
            key={item.id}
            item={item}
            lastItemRef={
              index === pokemonItems.length - 1 ? lastItemRef : undefined
            }
          />
        ))}
    </Styled.PokemonsList>
  );
};

export default Component;
