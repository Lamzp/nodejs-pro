require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db
require("./dbs/init.mongodb");
const { checkOverLoad } = require("./helpers/check.conect");
checkOverLoad();
//init routers
app.get("/", (req, res, next) => {
  // const strCompress = "hello word!";
  return res.status(200).json({
    message: "Welcome Lam",
    // metaData: strCompress.repeat(10000),
  });
});

//handing error

module.exports = app;
