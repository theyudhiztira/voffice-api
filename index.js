const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const fileUpload = require('express-fileupload');

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(fileUpload());

const routes = {};

/**
 * Load Main Routes
 */
fs.readdirSync("./routes/")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const route = require(path.join(`${__dirname}/routes`, file))(app);
  });

/**
 * Load Main Routes
 */
fs.readdirSync("./routes/partnership")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const route = require(path.join(`${__dirname}/routes/partnership`, file))(
      app
    );
  });

app.get("/", (req, res) => {
  return res.status(404).send({
    error: "resource not found!",
  });
});

app.listen(3005, () => {
  console.log("Server started on port 3005");
});
