import { HeaderSize, LogoSize } from "@/consts/constants";
import { Toolbar, ToolbarProps } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const CustomToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  display: "flex",
  maxWidth: `${theme.breakpoints.values.lg}px`,
  width: "100%",
  height: `${HeaderSize.height}px`,
  margin: "0 auto",
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: theme.zIndex.appBar,
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  "&.MuiToolbar-root": {
    padding: `0 ${theme.space?.sm}`,
    margin: "0 auto",
  },
}));

const LogoImage = styled("img")({
  width: `${LogoSize.width}px`,
  height: "auto",
  objectFit: "contain",
});

const Styled = {
  CustomToolbar,
  LogoImage,
};

export default Styled;
