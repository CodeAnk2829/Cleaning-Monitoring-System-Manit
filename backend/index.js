const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT;

const connectDatabase = require("./config/db");
connectDatabase();

const mainRouter = require("./routes/index");

app.use("/api/v1/", mainRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}`));