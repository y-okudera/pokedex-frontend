import Radius from "@/styles/Radius";
import Space from "@/styles/Space";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const radius = Radius();
  const space = Space();
  const theme = createTheme({
    radius: radius.radius,
    space: space.space,
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
