import express, { Express, Request, Response } from "express";
import { PORT } from "./util/secrets";

const app: Express = express();

app.use(express.json());

export default app;
