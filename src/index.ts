import express, { Application, Request, Response } from "express";
import log from "././libs/logger";
import "dotenv/config";
import connect from "./utils/connect";
const app: Application = express();
const port: number = 3000;

//Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static File Middleware
app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.send("here");
});

try {
  app.listen(port, async (): Promise<void> => {
    log.info(`Connected successfully on port ${port} 🚀`);
    await connect();
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
