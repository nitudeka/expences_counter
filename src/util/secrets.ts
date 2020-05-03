import dotenv from "dotenv";

dotenv.config();

export const PORT: string | undefined = process.env.PORT;
export const BASE_URL: string | undefined = process.env.BASE_URL;
export const MONGO_URI: string = process.env.MONGO_URI || "";
export const DB_NAME: string = process.env.DB_NAME || "";
