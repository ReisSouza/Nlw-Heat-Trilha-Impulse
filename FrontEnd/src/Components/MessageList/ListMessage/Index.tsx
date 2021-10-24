import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { api } from "../../../services/Api";
// Import Css
import styles from "./index.module.scss";
// Css
const useStyle = makeStyles({
  listItemAvatar: {
    padding: "2px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    lineHeight: 0,
    borderRadius: "50%",
    minWidth: "32px",
    height: "45px",
    marginRight: "15px",
  },
  Message: { 
    "&:nth-child(2)": {
       paddingLeft: "80px" 
  }
  }
});
type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};
export function ListMessage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>("message/last3").then((response) => {
      setMessages(response.data);
    });
  }, []);
  const classes = useStyle();
  return (
    <List sx={{ width: "100%", maxWidth: 520, height: 472 }}>
      {messages.map((message) => {
        return (
          <ListItem
            key={message.id}
            alignItems="flex-start"
            sx={{ display: "flex", flexDirection: "column" }}
            className={classes.Message}
          >
            <ListItemText primary={message.text} />
            <Box display="flex" alignItems="center">
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar
                  alt={message.user.name}
                  src={message.user.avatar_url}
                  sx={{ border: "4px solid #121214" }}
                />
              </ListItemAvatar>
              <Typography variant="body2">{message.user.name}</Typography>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
}
