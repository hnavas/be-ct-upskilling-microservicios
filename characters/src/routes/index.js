const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getCharacters);

router.use("/characters", require("./charactersRouter"));

module.exports = router;
