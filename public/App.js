import bodyParser from "body-parser";
import express from "express";
import { config } from "dotenv";
import { ROUTER } from "./APIs/Routes/Route.js";
config();
const PORT = process.env.PORT || 2025;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", ROUTER);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
