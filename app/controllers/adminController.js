const dataMapper = require("../dataMapper");

module.exports = {
  showStudentForm: async (req, res) => {
    try {
      const promos = await dataMapper.getPromos();
      res.render("admin/addStudent", { promos });
    } catch (error) {
      console.error(error);
      return res.send("Something went wrong dude");
    }
  },
  addStudent: async (req, res) => {
    console.log(req.body);

    try {
      const result = await dataMapper.saveStudent(req.body);
      if (result) {
        res.redirect(`/promos/${req.body.promo}`);
      } else {
        return res.status(500).send("erreur, aucun enregistrement crée ");
      }
    } catch (error) {
      console.error(error);
      return res.send("something went wrong");
    }
  },
};
