import usePokemons from "@/hooks/usePokemons";
import { useEffect } from "react";
import Component from "./component";

const Top = () => {
  const { pokemonItems, error, fetchPokemons } = usePokemons();

  useEffect(() => {
    fetchPokemons({ limit: 36, offset: 0 });
  }, []);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <Component pokemonItems={pokemonItems} />;
};

export default Top;
