const dataMapper = require("../dataMapper");

module.exports = {
  list: async (req, res) => {
    try {
      const promos = await dataMapper.getPromos();
      res.render("promos/list", {
        promos,
      });
    } catch (error) {
      console.error(error);
      return res.send("Something went wrong dude");
    }
  },

  details: async (req, res, next) => {
    const id = req.params.id;

    try {
      const promo = await dataMapper.getPromoById(id);
      if (promo) {
        res.render("promos/details", {
          promo,
        });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      return res.send("Something went wrong Dude");
    }
  },
};
