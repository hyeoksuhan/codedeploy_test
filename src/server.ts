import Path = require("path");
import { ServerLoader, ServerSettings } from "@tsed/common";

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  acceptMimes: ["application/json"],
  port: process.env.PORT || 3000,
  mount: {
    "/api/v1": "${rootDir}/controllers/v1/**/*.ts",
  }
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<any> {
    const bodyParser = require('body-parser');

    this
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));

    return null;
  }
}
