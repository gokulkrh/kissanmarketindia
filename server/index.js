const express = require("express");
const cors = require("cors");
const routes = require("./app/routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/", routes);
app.listen(PORT, console.log("server is running"));
