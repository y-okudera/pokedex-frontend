import { PokemonItem, getSdk } from "@/repositories/graphql";
import { GraphQLClient } from "graphql-request";
import { useRef, useState } from "react";

const usePokemons = () => {
  const processing = useRef(false);
  const [count, setCount] = useState<number>(0);
  const [nextOffset, setNextOffset] = useState<number>(0);
  const [pokemonItems, setPokemonItems] = useState<PokemonItem[]>([]);
  const [error, setError] = useState<Error>();

  const fetchPokemons = ({
    limit,
    offset,
  }: {
    limit: number;
    offset: number;
  }) => {
    if (processing.current) return;
    processing.current = true;
    const endpoint = process.env.NEXT_PUBLIC_POKE_API_URL;
    const client = new GraphQLClient(endpoint ? endpoint : "");
    const sdk = getSdk(client);
    sdk
      .ListPokemons({ limit: limit, offset: offset })
      .then((res) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        setCount(res.pokemons?.count as number);
        setNextOffset(res.pokemons?.nextOffset as number);
        setPokemonItems(res.pokemons?.results as PokemonItem[]);
      })
      .catch((err) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        setError(err);
      });
  };

  return {
    count,
    nextOffset,
    pokemonItems,
    error,
    fetchPokemons,
  };
};

export default usePokemons;
