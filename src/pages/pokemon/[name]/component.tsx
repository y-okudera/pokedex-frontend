import Gauge from "@/components/Gauge";
import Page from "@/components/Page";
import { BASE_STAT_MAX, POKEMON_IMAGE_URL_BASE } from "@/consts/constants";
import { Pokemon } from "@/repositories/graphql";
import { useTheme } from "@mui/material";
import { PokemonType } from "@mui/material/styles/createPalette";
import { useColor } from "color-thief-react";
import { useMemo } from "react";
import Styled from "./styled";

type Props = {
  pokemon: Pokemon | undefined;
};

const Component = ({ pokemon }: Props) => {
  const theme = useTheme();

  const pokemonImageUrl = useMemo(
    () =>
      `${POKEMON_IMAGE_URL_BASE}${(pokemon?.id ?? "")
        .toString()
        .padStart(3, "0")}.png`,
    [pokemon]
  );

  const { data: dominantColor } = useColor(pokemonImageUrl, "hex", {
    crossOrigin: "anonymous",
  });

  return (
    <Page
      title={pokemon?.name ?? ""}
      description={`${pokemon?.name}の詳細ページです。`}
    >
      {pokemon && (
        <>
          <Styled.CenteredContainer>
            <Styled.PokemonName gutterBottom>
              {pokemon?.name}
            </Styled.PokemonName>
            {pokemon.id && (
              <Styled.PokemonImage
                backgroundColor={dominantColor}
                src={pokemonImageUrl}
              />
            )}
          </Styled.CenteredContainer>
          <Styled.CenteredStatsContainer>
            <Styled.CenteredStatsInnerContainer>
              {Object.entries({
                ID: `#${(pokemon?.id ?? "").toString().padStart(3, "0")}`,
                Height: `${((pokemon?.height ?? 0) * 0.1).toFixed(1)} m`,
                Weight: `${((pokemon?.weight ?? 0) * 0.1).toFixed(1)} kg`,
                Ability: pokemon?.abilities?.map(
                  (ability) => `${ability?.ability?.name}`
                ),
                Type: pokemon?.types?.map((type) => `${type?.type?.name}`),
              }).map(([label, value], index) => (
                <>
                  <Styled.ItemName>{label}</Styled.ItemName>
                  {Array.isArray(value) ? (
                    <>
                      {value.map((v, i) => (
                        <Styled.StatsValue
                          backgroundColor={
                            theme.palette.pokemonType[v as keyof PokemonType] ??
                            dominantColor
                          }
                        >
                          {v}
                          {i < value.length - 1 && <br />}
                        </Styled.StatsValue>
                      ))}
                    </>
                  ) : (
                    <Styled.StatsValue backgroundColor={dominantColor}>
                      {value}
                    </Styled.StatsValue>
                  )}
                </>
              ))}
            </Styled.CenteredStatsInnerContainer>
            <Styled.CenteredStatsInnerContainer>
              <Styled.ItemName>{"Stats"}</Styled.ItemName>
              {pokemon?.stats?.map((stat) => (
                <>
                  {stat?.stat?.name && (
                    <Styled.SubItemName>
                      {`${
                        stat?.stat?.name?.charAt(0).toUpperCase() +
                        stat?.stat?.name?.slice(1)
                      }`}
                    </Styled.SubItemName>
                  )}
                  <Gauge
                    value={stat?.base_stat ?? 0}
                    maxValue={BASE_STAT_MAX}
                    barColor={dominantColor}
                  />
                  <Styled.StatsDetailValue>
                    {stat?.base_stat} / {BASE_STAT_MAX}
                  </Styled.StatsDetailValue>
                </>
              ))}
            </Styled.CenteredStatsInnerContainer>
          </Styled.CenteredStatsContainer>
        </>
      )}
    </Page>
  );
};

export default Component;
