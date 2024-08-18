import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import Header from "../Header";
import Styled from "./styled";

const Component = ({
  children,
  title,
  description,
}: {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "block", width: "100%" }}>
      <Head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      <div style={Styled.Children(theme)}>{children}</div>
    </Box>
  );
};

export default Component;
