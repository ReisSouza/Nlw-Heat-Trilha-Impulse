import express from "express";

import { router } from "./routes";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(router);
app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

app.listen(4000, () => console.log("Serve is running on port 4000"));