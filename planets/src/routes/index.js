const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", middlewares.planetValidation ,controllers.getPlanets);

module.exports = router;
