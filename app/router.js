const express = require("express");
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");
const adminController = require("./controllers/adminController");
const router = express.Router();

router.get("/", mainController.home);
router.get("/promos", promoController.list);
router.get("/promos/:id", promoController.details);
router.get("/promos/:id/students", studentController.studentsByPromo);
router.get("/students/:id", studentController.details);
router.get("/students", studentController.list);
router.get("/admin/addStudent", adminController.showStudentForm);

router.post("/admin/addStudent", adminController.addStudent);

module.exports = router;
