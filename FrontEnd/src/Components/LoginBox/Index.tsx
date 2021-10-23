import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useContext } from "react";

import { AuthContext } from "../../Context/Auth";
import theme from "../../Styles/Theme";
import styles from "./index.module.scss";

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",

        padding: "468px 88px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className={styles.loginBoxWreped}
    >
      <Typography
        variant="h1"
        color={theme.text.primary}
        fontWeight="700"
        fontSize="32px"
        lineHeight="38px"
      >
        Entre e compartilhe sua mensagem
      </Typography>
      <Button
        variant="contained"
        href={signInUrl}
        startIcon={<GitHubIcon />}
        sx={{
          marginTop: "10px",
          color: theme.background.primary,
          background: theme.background.tertiary,
          "&:hover": {
            background: theme.background.tertiary,
            filter: "brightness(0.9)",
          },
        }}
      >
        Entrar com github
      </Button>
    </Box>
  );
}
