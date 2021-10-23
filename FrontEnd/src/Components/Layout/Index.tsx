import { Box } from "@mui/system";
import { useContext } from "react";

import { AuthContext } from "../../Context/Auth";
import theme from "../../Styles/Theme";
import { LoginBox } from "../LoginBox/Index";
import { MessageList } from "../MessageList/Index";
import { SendMessageForm } from "../SendMessageForm/Index";

export function Layout() {
  const { user } = useContext(AuthContext);
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
      {user ? <SendMessageForm /> : <LoginBox />}
    </Box>
  );
}
