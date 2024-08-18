import Link from "next/link";
import Styled from "./styled";

const Component = () => {
  return (
    <Styled.CustomToolbar>
      <Link href="/">
        <Styled.LogoImage src={`/images/pokemon-logo.svg`} alt={"Pokemon"} />
      </Link>
    </Styled.CustomToolbar>
  );
};

export default Component;
