import Component from "./component";

const Gauge = ({ value, maxValue }: { value: number; maxValue: number }) => {
  return <Component value={value} maxValue={maxValue} />;
};

export default Gauge;
