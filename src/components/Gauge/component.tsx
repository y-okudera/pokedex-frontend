import { LinearProgress } from "@mui/material";
import Styled from "./styled";

type Props = {
  value: number;
  maxValue: number;
};

const Component = ({ value, maxValue }: Props) => {
  return (
    <Styled.Gauge variant="determinate" value={(value / maxValue) * 100} />
  );
};

export default Component;
