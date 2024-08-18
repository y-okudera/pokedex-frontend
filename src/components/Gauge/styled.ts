import { GaugeSize } from "@/consts/constants";
import { LinearProgress, LinearProgressProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Gauge = styled(LinearProgress)<LinearProgressProps>(({ theme }) => ({
  height: GaugeSize.height,
  borderRadius: theme.radius?.md,
  backgroundColor: theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#ff6f61",
  },
}));

const Styled = {
  Gauge,
};

export default Styled;
