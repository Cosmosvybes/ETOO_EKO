import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
const client = new MongoClient(process.env.MONGO_URL, {
    monitorCommands: true,
});
export let db = client.db("ETOO_EKO");
