import { Box } from "@mui/system";

import "./Styles/Global.css";
import { Layout } from "./Components/Layout/Index";

export function App() {
  return (
    <Box className="App" sx={{ display: "flex", justifyContent: "center" }}>
      <Layout />
    </Box>
  );
}
