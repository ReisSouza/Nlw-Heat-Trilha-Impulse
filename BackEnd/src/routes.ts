import { Router } from "express";

import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLast3MessageController";
import { ProfileUserController } from "./controller/ProfilerUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/message/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };
