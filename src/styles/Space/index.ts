import Dimension from "@/styles/Dimension";

const Space = () => {
  const dimension = Dimension().dimension;

  return {
    space: {
      xs: dimension.scale[50],
      sm: dimension.scale[100],
      md: dimension.scale[200],
    },
  };
};

export default Space;
