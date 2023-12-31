import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import RTL from "components/RTL";
import useSettings from "hooks/useSettings";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { createCustomTheme } from "theme";
import "./i18n";
import { RegistrationContextFunction } from "context/RegistrationContext";

const App = () => {
  const content = useRoutes(routes());
  const { settings } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });
  return (
    <RegistrationContextFunction>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RTL>
            <CssBaseline />
            {content}
          </RTL>
        </ThemeProvider>
      </StyledEngineProvider>
    </RegistrationContextFunction>
  );
};

export default App;
