// Import Material Ui, Criando contexto de Theme
import { createTheme } from "@mui/material/styles";
// Typando os novos temas criados
declare module "@mui/material/styles" {
  interface Theme {
    background: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      tertiary: React.CSSProperties["color"];
      active: React.CSSProperties["color"];
      input: React.CSSProperties["color"];
      user: React.CSSProperties["color"];
    };
    text: {
      primary: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    background: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      tertiary: React.CSSProperties["color"];
      active: React.CSSProperties["color"];
      input: React.CSSProperties["color"];
      user: React.CSSProperties["color"];
    };
    text: {
      primary: React.CSSProperties["color"];
    };
  }
}
// A custom theme for this app
const theme = createTheme({
  text: {
    primary: "#e1e1e6",
  },

  background: {
    primary: "#121214",
    secondary: "#17171a",
    tertiary: "#ffcd1e",
    active: "#413F3F",
    input: "#40444B",
    user: "#292B2F",
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
});

// Exportando Theme
export default theme;
