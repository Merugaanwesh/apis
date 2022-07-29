const express = require("express");
const sechma = require("./sechma")
const app = express();
const router = require("./sin")
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
app.use(bodyparser.json())
app.use("/api",router)
const { response } = require("express");
const url = "mongodb://localhost:27017/ZeeTelugu";
mongoose.connect(url)
app.listen(3000,console.log("sevre runing okay"))
