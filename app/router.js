const express = require("express");
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const router = express.Router();

router.get("/", mainController.home);
router.get('/promos', promoController.list);
router.get('/promos/:id', promoController.details);
router.get('/promos/:id/students', promoController.students);

module.exports = router;
