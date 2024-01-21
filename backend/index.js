const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

const connectDatabase = require("./config/db");
connectDatabase();

const userRoute = require("./routes/userRoute");
const buildingRoute = require("./routes/buildingRoute");

app.use('/', userRoute);
app.use('/', buildingRoute);

app.listen(port, () => console.log(`Server is listening on port ${port}`));