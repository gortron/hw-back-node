"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var createError = require("http-errors");
// var path = require("path");
// var cookieParser = require("cookie-parser");
const app = (0, _express.default)();
exports.app = app;
app.disable("x-powered-by");
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)("dev")); // app.use(cookieParser());
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

const start = () => {
  try {
    // await connect();
    // app.listen(config.port, () => {
    //   console.log(`REST API on http://localhost:${config.port}/api`);
    // });
    app.listen(() => {
      console.log(`REST API on http://localhost:3000/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;