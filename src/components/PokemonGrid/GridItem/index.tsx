import { PokemonItem } from "@/repositories/graphql";
import Component from "./component";

const GridItem = ({ item }: { item: PokemonItem }) => {
  return <Component item={item} />;
};

export default GridItem;
