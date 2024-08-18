import { PokemonItem } from "@/repositories/graphql";
import Styled from "./styled";

const Component = ({ item }: { item: PokemonItem }) => {
  return (
    <Styled.GridItemArea>
      <Styled.PokemonImage src={item.image ?? ""} alt={item.name ?? ""} />
      <div>{item.name}</div>
    </Styled.GridItemArea>
  );
};

export default Component;
