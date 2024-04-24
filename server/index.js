import express from "express";
import cors from "cors";
import routes from "./app/routes.js";
import {} from "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.static("./Static"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
app.listen(PORT, console.log("server is running"));
