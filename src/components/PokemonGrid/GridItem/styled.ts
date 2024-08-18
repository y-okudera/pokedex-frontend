import { ThumbSize } from "@/consts/constants";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GridItemArea = styled(Box)<BoxProps>(({ theme }) => ({
  padding: `0 ${theme.space?.sm}`,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.radius?.md,
  },
  textDecoration: "none",
}));

const ItemLink = () => ({
  textDecoration: "none",
});

const PokemonImage = styled(LazyLoadImage)(({ theme }) => ({
  width: `${ThumbSize.xs.width}px`,
  height: `${ThumbSize.xs.height}px`,
  objectFit: "cover",
  [theme.breakpoints.up("sm")]: {
    width: `${ThumbSize.sm.width}px`,
    height: `${ThumbSize.sm.height}px`,
  },
}));

const PokemonName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

const Styled = {
  GridItemArea,
  ItemLink,
  PokemonImage,
  PokemonName,
};

export default Styled;
