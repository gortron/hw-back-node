"use strict";

var _express = require("express");

var _controllers = _interopRequireDefault(require("./controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.route("/").get(_controllers.default.welcome());
router.route("/ping").get(_controllers.default.ping());