import express, { Request, Response} from "npm:express@4.18.2";
import { connectDB } from "./config/database.ts";

const app = express();

const db = connectDB();



app.get("/", (_req: Request, res: Response) => {
  res.send({ test: "test"});
});

app.listen(8000, () => {
  console.log("Server connected to port: ", 8000)
});