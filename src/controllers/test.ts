import { Controller, Get } from "@tsed/common";
import * as Express from "express";

export interface TestResponse {
  message: string;
}

@Controller("/test")
export class TestCtrl {
    @Get("/")
    async get(_request: Express.Request, _response: Express.Response): Promise<TestResponse> {
        return { message: "test" };
    }
}
