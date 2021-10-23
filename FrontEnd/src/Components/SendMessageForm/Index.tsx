import GitHubIcon from "@mui/icons-material/GitHub";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";

import { AuthContext } from "../../Context/Auth";

export function SendMessageForm() {
  const { user } = useContext(AuthContext);

  return (
    <Box>
      <IconButton aria-label="LoginOut">
        <LogoutIcon />
      </IconButton>
      <Box component="header">
        <Avatar alt={user?.name} src={user?.avatar_url} />
        <Typography
          variant="h1"
          component="h1"
          fontSize="30px"
          fontWeight="700"
        >
          {user?.name}
        </Typography>
        <Typography variant="body1" component="h2" fontSize="30px">
          <GitHubIcon /> {user?.login}
        </Typography>
      </Box>
      <Box component="form" />
    </Box>
  );
}
