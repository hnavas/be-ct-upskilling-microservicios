const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", middlewares.filmValidation ,controllers.getFilms);

module.exports = router;
