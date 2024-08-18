import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CenteredContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const PokemonName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h4,
}));

const CenteredStatsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: theme.space?.sm,
  margin: `${theme.space?.md} auto`,
}));

const CenteredStatsInnerContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
}));

const ItemName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.subtitle1,
  fontWeight: "bold",
}));

const SubItemName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
}));

const StatsValue = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.body2,
}));

const StatsDetailValue = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.caption,
}));

const Styled = {
  CenteredContainer,
  PokemonName,
  CenteredStatsContainer,
  CenteredStatsInnerContainer,
  ItemName,
  SubItemName,
  StatsValue,
  StatsDetailValue,
};

export default Styled;
