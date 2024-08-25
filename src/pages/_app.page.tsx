import Palette from "@/styles/Palette";
import Radius from "@/styles/Radius";
import Space from "@/styles/Space";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const palette = Palette();
  const radius = Radius();
  const space = Space();
  const theme = createTheme({
    palette: palette.palette,
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
