import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();
const client = new MongoClient(process.env.MONGO_URL);
export let db = client.db("ETO-EKO DATA");
