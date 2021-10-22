import { Box } from "@mui/system";

import theme from "../../Styles/Theme";
import { LoginBox } from "../LoginBox/Index";
import { MessageList } from "../MessageList/Index";

export function Layout() {
  return (
    <Box
      sx={{
        width: theme.breakpoints.values.lg,
        height: "100vh",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 453px",
        columnGap: "120px",
        position: "relative",
      }}
      component="main"
      className="contentWrapper"
    >
      <MessageList />
      <LoginBox />
    </Box>
  );
}
