import { Router } from "express";
import controllers from "./controllers";

const router = Router();

router.route("/").get(controllers.welcome());
router.route("/ping").get(controllers.ping());
