import { Box } from "@mui/system";

import Logo from "../../assets/logo.svg";
import { ListMessage } from "./ListMessage/Index";

export function MessageList() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
    >
      <Box position="absolute" top="20px" left="70px">
        <img src={Logo} alt="Logo" />
      </Box>
      <ListMessage />
    </Box>
  );
}
