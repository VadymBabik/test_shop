import express, { Request, Response } from "express";
import { config } from "dotenv";

const app = express();
config();
const PORT = process.env.APP_PORT || 5000;
app.get("/", async (req: Request, res: Response) => {
  console.log(req.url);
  res.status(200).send("Ok!");
});

app.listen(PORT, () => console.log(`App lisen to ${PORT}...`));
