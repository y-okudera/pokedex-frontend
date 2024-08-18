import usePokemon from "@/hooks/usePokemon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Component from "./component";

const Pokemon = () => {
  const [name, setName] = useState<string>();
  const router = useRouter();
  const { pokemon, error, fetchPokemon } = usePokemon();

  useEffect(() => {
    if (!router.isReady) return;
    setName(router.query.name as string);
  }, [router.isReady]);

  useEffect(() => {
    if (!name) return;
    fetchPokemon({ name: name });
  }, [name]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <Component pokemon={pokemon} />;
};

export default Pokemon;
