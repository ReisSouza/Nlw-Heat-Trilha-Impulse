import { Response, Request } from "express";

import { CreateServiceMenssage } from "../services/CreateServiceMenssage";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;
    const service = new CreateServiceMenssage();
    const result = await service.execute(message, user_id);
    return response.json(result);
  }
}

export { CreateMessageController };
