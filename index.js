require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.set("port", process.env.PORT || 8060);
//Route
app.use("/api", require("./routes/customer"));
//Server is listening
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
