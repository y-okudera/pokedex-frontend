import { ThumbSize } from "@/consts/constants";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

const CenteredContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const PokemonName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: "bold",
}));

interface PokemonImageProps extends LazyLoadImageProps {
  backgroundColor?: string;
}

const PokemonImage = styled(LazyLoadImage)<PokemonImageProps>(
  ({ theme, backgroundColor }) => ({
    width: ThumbSize.md.width,
    height: ThumbSize.md.height,
    backgroundColor: backgroundColor,
    borderRadius: theme.radius?.md,
    padding: theme.space?.md,
  })
);

const CenteredStatsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: theme.space?.sm,
  margin: `${theme.space?.md} auto`,
}));

const CenteredStatsInnerContainer = styled(Box)<BoxProps>(() => ({
  width: "100%",
}));

const ItemName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.subtitle1,
  fontWeight: "bold",
}));

const SubItemName = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
}));

interface StatsValueProps extends TypographyProps {
  backgroundColor?: string;
}

const StatsValue = styled(Typography)<StatsValueProps>(
  ({ theme, backgroundColor }) => ({
    ...theme.typography.body2,
    display: "inline-block",
    margin: `0 ${theme.space?.sm} ${theme.space?.sm} 0`,
    padding: `${theme.space?.xs} ${theme.space?.sm}`,
    color: theme.palette.common.white,
    backgroundColor: backgroundColor,
    borderRadius: theme.radius?.sm,
  })
);

const StatsDetailValue = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.caption,
}));

const Styled = {
  CenteredContainer,
  PokemonName,
  PokemonImage,
  CenteredStatsContainer,
  CenteredStatsInnerContainer,
  ItemName,
  SubItemName,
  StatsValue,
  StatsDetailValue,
};

export default Styled;
