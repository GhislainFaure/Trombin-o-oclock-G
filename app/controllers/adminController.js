const dataMapper = require("../dataMapper");
const client = require("../dbClient");

module.exports = {
  showStudentForm: async (req, res) => {
    if (req.session.login === "glux") {
      try {
        const promos = await dataMapper.getPromos();
        res.render("admin/addStudent", { promos });
      } catch (error) {
        console.error(error);
        return res.send("Something went wrong dude");
      }
    } else if (req.session.login != null) {
      res.send(req.session.login + "you are not a admin!");
    } else {
      res.redirect("/login");
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
