import db from "./common/db";
import { User } from "./entity/User";

import { $log, ServerLoader } from "@tsed/common";
import { Server } from "./server";

async function bootstrap() {
  $log.info("Start server...");
  const server = await ServerLoader.bootstrap(Server);

  await server.listen();
  $log.info("Server initialized");
}

db.connect().then(async connection => {
  await bootstrap();

  console.log("Inserting a new user into the database...");
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;

  await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await connection.manager.find(User);
  console.log("Loaded users: ", users);

  const _user = await connection.manager.findOne(User, 1);
  console.log("user:", user);

}).catch(error => console.log(error));
