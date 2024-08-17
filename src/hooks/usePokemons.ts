import { PokemonItem, getSdk } from "@/repositories/graphql";
import { GraphQLClient } from "graphql-request";
import { useRef, useState } from "react";

const usePokemons = () => {
  const processing = useRef(false);
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
        const data = res.pokemons?.results as PokemonItem[];
        setPokemonItems(data);
      })
      .catch((err) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        setError(err);
      });
  };

  return { pokemonItems, error, fetchPokemons };
};

export default usePokemons;
