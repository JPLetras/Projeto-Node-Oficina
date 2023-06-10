import { Request, Response } from "express";
import { register } from "../../services/auth";

export default async (request: Request, response: Response) => {
  try {
    const { login, password, name } = request.body;

    const user = await register(login, password, name);

    return response.json({ user });
  } catch (e: any) {
    return response.status(400).json({
      code: 400,
      error: "Bad Request",
      message: e.message,
    });
  }
};
