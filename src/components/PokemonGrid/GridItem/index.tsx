import { PokemonItem } from "@/repositories/graphql";
import Component from "./component";

const GridItem = ({
  item,
  lastItemRef,
}: {
  item: PokemonItem;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return <Component item={item} lastItemRef={lastItemRef} />;
};

export default GridItem;
