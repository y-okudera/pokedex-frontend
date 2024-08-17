import { PokemonItem } from "@/repositories/graphql";
import { List } from "@mui/material";

type Props = {
  pokemonItems: PokemonItem[] | undefined;
};

const Component = ({ pokemonItems }: Props) => {
  console.log(pokemonItems);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {!!pokemonItems &&
        pokemonItems.map((item) => (
          <div
            key={item.id}
            style={{
              margin: "8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image ?? ""}
              alt="pokemon image"
              width={125}
              height={125}
            />
            <div>{item.name}</div>
          </div>
        ))}
    </List>
  );
};

export default Component;
