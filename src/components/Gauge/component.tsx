import Styled from "./styled";

type Props = {
  value: number;
  maxValue: number;
  barColor?: string;
};

const Component = ({ value, maxValue, barColor }: Props) => {
  return (
    <Styled.Gauge
      barColor={barColor}
      variant="determinate"
      value={(value / maxValue) * 100}
    />
  );
};

export default Component;
