import Component from "./component";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Page = (props: Props) => {
  return <Component {...props} />;
};

export default Page;
