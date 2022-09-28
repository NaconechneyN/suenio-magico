const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers")
const productsMiddlewares = require("../middlewares/productsMiddleware")

router.get("/", productsControllers.list)

router.get("/create", productsControllers.createForm)
router.post("/create",productsMiddlewares.checkCreateForm, productsControllers.create)

module.exports = router;