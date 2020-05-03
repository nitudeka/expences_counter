import { MongoError } from "mongodb";
import app from "./app";
import { initDb } from "./lib/db";
import { PORT, MONGO_URI, DB_NAME, BASE_URL } from "./util/secrets";

const nodeEnv: string | undefined = process.env.NODE_ENV;

initDb(MONGO_URI, DB_NAME)
	.then(() => {
		console.log("Connected successfully to Mongodb");
		app.listen(PORT, (): void => {
			console.log(`Server is listening on port ${BASE_URL} in ${nodeEnv} mode`);
		});
	})
	.catch((err: MongoError): void => {
		console.log("Error connecting to Mongodb");
	});
