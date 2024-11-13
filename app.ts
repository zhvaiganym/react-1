import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get("/test", (req: Request, res: Response) => {
    res.send("hello world!");
});

app.listen(process.env.PORT);