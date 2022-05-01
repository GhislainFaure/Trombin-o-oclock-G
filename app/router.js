const express = require("express");
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");
const router = express.Router();

router.get('/', mainController.home);
router.get('/promos', promoController.list);
router.get('/promos/:id', promoController.details);
router.get('/promos/:id/students', studentController.studentsByPromo);
router.get('/students/:id', studentController.details);


module.exports = router;
