import bodyParser from "body-parser";
import express from "express";
import { ROUTER } from "./API/routes/v1/Route.js";
import cors from "cors";
const PORT = process.env.PORT || 2025;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ optionsSuccessStatus: 200, origin: "*" }));
app.use("/api/v1/", ROUTER);
app.listen(PORT, () => {
    console.log(`Server  running on port ${PORT}`);
});
