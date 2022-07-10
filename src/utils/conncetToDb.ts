import mongoose from "mongoose";
import config from "config";
import log from "./logger";

export default async function connectToDb() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    log.info("Connceted to db");
  } catch (error) {
    process.exit(1);
  }
}
