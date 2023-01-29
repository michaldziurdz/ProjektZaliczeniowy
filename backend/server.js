let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const ksiazkiRoute = require("../backend/routes/ksiazki.route");

// Connecting MongoDB Database
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.sbmxonf.mongodb.net/Mern?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log(con.connections);
    console.log("DB connection successful!");
  });

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/ksiazki", ksiazkiRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
