"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const welcome = async (req, res) => {
  try {
    const response = {
      message: "Welcome to the Hatchways Challenge API"
    };
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const ping = async (req, res) => {
  try {
    const response = {
      success: true
    };
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

const posts = async (req, res) => {
  try {
    console.log(req.query.tag);
    res.status(200).send({
      hello: "world"
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const controllers = {
  welcome,
  ping,
  posts
};
var _default = controllers;
exports.default = _default;