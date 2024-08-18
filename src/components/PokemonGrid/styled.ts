import { List, ListProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const PokemonsList = styled(List)<ListProps>(({ theme }) => ({
  width: "100%",
  maxWidth: `${theme.breakpoints.values.lg}px`,
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

const Styled = {
  PokemonsList,
};

export default Styled;
