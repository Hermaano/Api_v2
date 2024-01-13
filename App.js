require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Router/UserRoute");
const ErrorMiddleWare = require("./MiddleWare/ErrorMiddleWare");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.get("/", function (req, res) {
    //throw new Error('Fake error')
  res.send("Hello World");
});

app.use("/api", UserRouter);

app.use(ErrorMiddleWare);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB Is Connected ");
    app.listen(PORT, () => console.log(`port : ${PORT}`));
  })
  .catch(() => {});
