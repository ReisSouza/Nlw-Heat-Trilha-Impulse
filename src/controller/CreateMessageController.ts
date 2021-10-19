import { Response, Request } from "express";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { text } = request.body;
  }
}

export { CreateMessageController };
