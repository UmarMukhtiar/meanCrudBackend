const express = require("express");
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require("./routes/appRoutes");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

mongoose.connect(
  "mongodb+srv://umar:1234@cluster0.wdqbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("DB has connected!");
    } else {
      console.log(err);
    }
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", appRoutes);

app.listen(port, () => console.log("Backend running at port:", port));
