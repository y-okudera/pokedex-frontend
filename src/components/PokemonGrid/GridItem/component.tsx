import { PokemonItem } from "@/repositories/graphql";
import Link from "next/link";
import Styled from "./styled";

const Component = ({ item }: { item: PokemonItem }) => {
  return (
    <Styled.GridItemArea>
      <Link href={`/pokemon/${item.name}/`} style={Styled.ItemLink()}>
        <Styled.PokemonImage src={item.image ?? ""} alt={item.name ?? ""} />
        <Styled.PokemonName>{item.name}</Styled.PokemonName>
      </Link>
    </Styled.GridItemArea>
  );
};

export default Component;
