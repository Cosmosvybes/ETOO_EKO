import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URL!);
export let db = client.db("ETOO_EKO");
