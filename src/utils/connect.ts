import mongoose from "mongoose";
import log from "../libs/logger";

async function connect() {
  try {
    const dbUri: string = process.env.MGDB ?? "";
    await mongoose.connect(dbUri);
    log.info("Connected to Mongo DB");
  } catch (error) {
    log.error("Failed to connect Mongo DB");
    log.error(error);
    process.exit(1);
  }
}

export default connect;
