import { PokemonItem } from "@/repositories/graphql";
import Link from "next/link";
import Styled from "./styled";

const Component = ({
  item,
  lastItemRef,
}: {
  item: PokemonItem;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return (
    <Styled.GridItemArea ref={lastItemRef}>
      <Link href={`/pokemon/${item.name}/`} style={Styled.ItemLink()}>
        <Styled.PokemonImage src={item.image ?? ""} alt={item.name ?? ""} />
        <Styled.PokemonName>{item.name}</Styled.PokemonName>
      </Link>
    </Styled.GridItemArea>
  );
};

export default Component;
