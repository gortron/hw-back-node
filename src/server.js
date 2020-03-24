import express from "express";
import morgan from "morgan";
// import path from "path";
import cors from "cors";
import { json, urlencoded } from "body-parser";

// import router from "./resources/router";
import controllers from "./resources/controllers";

// var createError = require("http-errors");
// var path = require("path");
// var cookieParser = require("cookie-parser");

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.use(cookieParser());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.get("/api", controllers.welcome);
app.get("/api/ping", controllers.ping);
app.get("/api/posts", controllers.posts);

export const start = () => {
  try {
    // await connect();
    // app.listen(config.port, () => {
    //   console.log(`REST API on http://localhost:${config.port}/api`);
    // });

    app.listen(3000, () => {
      console.log(`REST API on http://localhost:3000/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
