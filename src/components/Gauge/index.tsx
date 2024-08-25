import Component from "./component";

const Gauge = ({
  value,
  maxValue,
  barColor,
}: {
  value: number;
  maxValue: number;
  barColor?: string;
}) => {
  return <Component value={value} maxValue={maxValue} barColor={barColor} />;
};

export default Gauge;
