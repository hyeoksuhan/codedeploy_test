import { ServerLoader, ServerSettings } from "@tsed/common";
import Path = require("path");

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  acceptMimes: ["application/json"],
  port: process.env.PORT || 3000,
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

  public $onReady() {
    console.log('Server started...');
  }
}

new Server()
  .start()
  .catch((err: Error) => {
    console.log('server starting error', err)
  });
