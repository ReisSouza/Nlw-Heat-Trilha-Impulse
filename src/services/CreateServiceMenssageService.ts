import { io } from "../app";
import prismaClient from "../prisma";

class CreateServiceMenssage {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: { user: true },
    });

    const InfoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit("new_message", InfoWS);
    return message;
  }
}

export { CreateServiceMenssage };
