const promos = require("../../data/promos.json");
const students = require("../../data/students.json");

module.exports = {
  list: (req, res) => {
    res.render("promos/list", {
      promos,
    });
  },

  details: (req, res, next) => {
    const id = req.params.id;

    promo = promos.find((promo) => {
      return promo.id === Number(id);
    });
    res.render("promos/details", { promo });
  },
  students: (req, res, next) => {
    const promoId = req.params.id;

    promo = promos.find((promo) => {
      return promo.id === Number(id);
    });
    if (promo) {
      const studentsOfPromo = students.filter((student) => {
        return student.promo === Number(promoId);
      });

      res.render("promos/students", {
        promo,
        students: studentsOfPromo,
      });
    } else {
      next();
    }
  },
};
