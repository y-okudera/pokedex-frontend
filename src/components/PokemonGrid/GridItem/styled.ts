import { ThumbSize } from "@/consts/constants";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface GridItemAreaProps extends BoxProps {
  hoverBackgroundColor?: string;
}

const GridItemArea = styled(Box)<GridItemAreaProps>(
  ({ theme, hoverBackgroundColor }) => ({
    padding: `0 ${theme.space?.sm}`,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      backgroundColor: alpha(
        hoverBackgroundColor ?? theme.palette.action.hover,
        0.75
      ),
      borderRadius: theme.radius?.md,
    },
    textDecoration: "none",
  })
);

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
  fontWeight: "bold",
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
