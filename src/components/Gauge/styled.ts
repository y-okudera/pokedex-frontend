import { GaugeSize } from "@/consts/constants";
import { LinearProgress, LinearProgressProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface GaugeProps extends LinearProgressProps {
  barColor?: string;
}

const Gauge = styled(LinearProgress)<GaugeProps>(({ theme, barColor }) => ({
  height: GaugeSize.height,
  borderRadius: theme.radius?.md,
  backgroundColor: theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    backgroundColor: barColor,
  },
}));

const Styled = {
  Gauge,
};

export default Styled;
