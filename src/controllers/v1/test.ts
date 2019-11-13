import { Controller, Get } from "@tsed/common";
import { Request, Response } from "express";

export interface TestResponse {
  message: string;
}

@Controller("/test")
export class TestCtrl {
  @Get()
  async get(_req: Request, _res: Response): Promise<TestResponse> {
    return { message: "test" };
  }
}
