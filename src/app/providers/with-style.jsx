import "#app/index.css";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const withStyle = (component) => () =>
  (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>{component()}</ThemeProvider>
    </StyledEngineProvider>
  );
