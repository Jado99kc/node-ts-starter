import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3000;

//Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static File Middleware
app.use(express.static(__dirname + "./../public"));
app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.send("here");
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port} 🚀`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
