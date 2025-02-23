const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/characters", middlewares.characterValidation ,controllers.getCharacters);

module.exports = router;
