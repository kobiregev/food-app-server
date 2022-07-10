require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/conncetToDb";
import log from "./utils/logger";
import router from "./routes";

const app = express();

app.use(router);

const port = config.get("port");

app.listen(port, async () => {
  log.info(`App started at http://localhost:${port}`);
  await connectToDb();
});
