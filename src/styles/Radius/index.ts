import Dimension from "@/styles/Dimension";

const Radius = () => {
  const dimension = Dimension().dimension;

  return {
    radius: {
      sm: dimension.scale[100],
      md: dimension.scale[200],
    },
  };
};
export default Radius;
