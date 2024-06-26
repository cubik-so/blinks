import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import App from "./app";
import { BlinksController } from "./controllers/blinks.controller";

const main = async () => {
  const app = new App([new BlinksController()]);

  app.listen();
};

main()
  .then(() => {
    console.info("App started");
  })
  .catch((err) => {
    console.error("App failed");
    console.error(err.stack);
  });
