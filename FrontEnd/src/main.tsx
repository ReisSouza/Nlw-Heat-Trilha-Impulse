// Import Reset CSS Material
import CssBaseline from "@mui/material/CssBaseline";
// Impontando Provedor de theme do Material Ui
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
// Importando tudo do React
import * as React from "react";
import ReactDOM from "react-dom";

// Import Aplicação
import { App } from "./App";
import { AuthProvider } from "./Context/Auth";
// Importando Theme Create
import theme from "./Styles/Theme";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
