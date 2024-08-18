import { Pokemon, getSdk } from "@/repositories/graphql";
import { GraphQLClient } from "graphql-request";
import { useRef, useState } from "react";

const usePokemon = () => {
  const processing = useRef(false);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<Error>();

  const fetchPokemon = ({ name }: { name: string }) => {
    if (processing.current) return;
    processing.current = true;
    const endpoint = process.env.NEXT_PUBLIC_POKE_API_URL;
    const client = new GraphQLClient(endpoint ? endpoint : "");
    const sdk = getSdk(client);
    sdk
      .GetPokemon({ name: name })
      .then((res) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        const data = res.pokemon as Pokemon;
        setPokemon(data);
      })
      .catch((err) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        setError(err);
      });
  };

  return { pokemon, error, fetchPokemon };
};

export default usePokemon;
