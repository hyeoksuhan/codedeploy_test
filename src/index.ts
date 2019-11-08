import * as express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/test", (_req: Request, res:Response) => {
  res.send('GET /test');
});

app.listen(process.env.PORT || 3000, () => {
  console.log("ready");
});
