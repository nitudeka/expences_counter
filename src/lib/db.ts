import { MongoClient, Collection, Db } from "mongodb";

let db: Db;
let client: MongoClient;

export const initDb = async (mongoUri: string, dbName: string): Promise<Db> => {
  if (db) {
    return db;
  }

  try {
    client = await MongoClient.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db(dbName);

    return db;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getDb = (): Db => {
  return db;
};

export const closeDb = (): void => {
  client.close();
};
