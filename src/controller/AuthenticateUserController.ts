import { Response, Request } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserService();
    const { code } = request.body;
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (err) {
      return response.json({ Error: err.message });
    }
  }
}

export { AuthenticateUserController };
