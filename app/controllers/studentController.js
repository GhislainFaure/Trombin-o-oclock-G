const dataMapper = require("../dataMapper");
const client = require("../dbClient");

module.exports = {
  list: async (req, res, next) => {
    try {
      const students = await dataMapper.getStudents();
      res.render("students/list", {
        students
      });
    } catch (error) {
      console.error(error);
      return res.send("Something went wrong dude");
    }

  },
  studentsByPromo: async (req, res, next) => {
    const id = req.params.id;

    try {
      const promo = await dataMapper.getPromoById(id);
      if (promo) {
        const students = await dataMapper.getStudentsByPromoId(id);

        res.render("promos/students", {
          promo,
          students,
        });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      return res.send("Something went wrong dude!");
    }
  },
  details: async (req, res, next) => {
    const id = req.params.id;

    try {
      const student = await dataMapper.getStudentById(id);
      if (student) {
        const promo = await dataMapper.getPromoById(student.promo_id);
        res.render("students/details", {
          student,
          promo,
        });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.send("Something went wrong dude!");
    }
  },
};
