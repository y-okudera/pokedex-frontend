import Gauge from "@/components/Gauge";
import Page from "@/components/Page";
import { BASE_STAT_MAX, POKEMON_IMAGE_URL_BASE } from "@/consts/constants";
import { Pokemon } from "@/repositories/graphql";
import { Divider } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Styled from "./styled";

type Props = {
  pokemon: Pokemon | undefined;
};

const Component = ({ pokemon }: Props) => {
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
              <LazyLoadImage
                src={`${POKEMON_IMAGE_URL_BASE}${pokemon.id
                  .toString()
                  .padStart(3, "0")}.png`}
                width={300}
              />
            )}
          </Styled.CenteredContainer>

          <Styled.CenteredStatsContainer>
            <Styled.CenteredStatsInnerContainer>
              {Object.entries({
                ID: `#${(pokemon?.id ?? "").toString().padStart(3, "0")}`,
                Height: pokemon?.height,
                Weight: pokemon?.weight,
                Ability: pokemon?.abilities?.map(
                  (ability) => `${ability?.ability?.name}`
                ),
                Type: pokemon?.types?.map((type) => `${type?.type?.name}`),
              }).map(([label, value], index) => (
                <>
                  <Styled.ItemName>{label}</Styled.ItemName>
                  {Array.isArray(value) ? (
                    <>
                      <Styled.StatsValue>
                        {value.map((v, i) => (
                          <>
                            {v}
                            {i < value.length - 1 && <br />}
                          </>
                        ))}
                      </Styled.StatsValue>
                      <Divider />
                    </>
                  ) : (
                    <>
                      <Styled.StatsValue>{value}</Styled.StatsValue>
                      <Divider />
                    </>
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
                  ></Gauge>
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
