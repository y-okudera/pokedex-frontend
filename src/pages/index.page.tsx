import usePokemons from "@/hooks/usePokemons";
import { useCallback, useEffect, useRef, useState } from "react";
import Component from "./component";
import { PokemonItem } from "@/repositories/graphql";
import { FETCH_POKEMONS_LIMIT } from "@/consts/constants";

const Top = () => {
  const { count, nextOffset, pokemonItems, error, fetchPokemons } =
    usePokemons();
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<PokemonItem[]>([]);

  useEffect(() => {
    fetchPokemons({ limit: FETCH_POKEMONS_LIMIT, offset: offset });
  }, []);

  useEffect(() => {
    setOffset(nextOffset);
  }, [nextOffset]);

  useEffect(() => {
    setHasMore(count > data.length);
  }, [count, data]);

  useEffect(() => {
    setData([...data, ...pokemonItems]);
  }, [pokemonItems]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchPokemons({ limit: FETCH_POKEMONS_LIMIT, offset: offset });
        }
      });
      if (node) observer.current.observe(node);
    },
    [offset, hasMore]
  );

  return <Component pokemonItems={data} lastItemRef={lastItemRef} />;
};

export default Top;
