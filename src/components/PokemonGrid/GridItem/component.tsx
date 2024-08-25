import { POKEMON_IMAGE_URL_BASE } from "@/consts/constants";
import { PokemonItem } from "@/repositories/graphql";
import { useColor } from "color-thief-react";
import Link from "next/link";
import { useMemo } from "react";
import Styled from "./styled";

const Component = ({
  item,
  lastItemRef,
}: {
  item: PokemonItem;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  const pokemonImageUrl = useMemo(
    () =>
      `${POKEMON_IMAGE_URL_BASE}${(item?.id ?? "")
        .toString()
        .padStart(3, "0")}.png`,
    [item]
  );

  const { data: dominantColor } = useColor(pokemonImageUrl, "hex", {
    crossOrigin: "anonymous",
  });
  return (
    <Styled.GridItemArea hoverBackgroundColor={dominantColor} ref={lastItemRef}>
      <Link href={`/pokemon/${item.name}/`} style={Styled.ItemLink()}>
        <Styled.PokemonImage src={item.image ?? ""} alt={item.name ?? ""} />
        <Styled.PokemonName>{item.name}</Styled.PokemonName>
      </Link>
    </Styled.GridItemArea>
  );
};

export default Component;
