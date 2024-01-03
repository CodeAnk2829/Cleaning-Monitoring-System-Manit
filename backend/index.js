const express = require("express");
require('dotenv').config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

const connectDatabase = require("./config/db");
connectDatabase();

const userRoute = require("./routes/userRoute");

app.use('/', userRoute);
app.listen(port, () => console.log(`Server is listening on port ${port}`));