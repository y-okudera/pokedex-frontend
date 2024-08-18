import { HeaderSize } from "@/consts/constants";
import { Theme } from "@mui/material/styles";

const Children = (theme: Theme) => ({
  maxWidth: `${theme.breakpoints.values.lg}px`,
  width: "100%",
  height: "100%",
  margin: `${HeaderSize.height}px auto`,
});

const Styled = {
  Children,
};

export default Styled;
