const client = require("../dbClient");

module.exports = {
  list: async (req, res) => {
    const query = `SELECT * FROM "promo"`;
    try {
      const resultats = await client.query(query);
      res.render("promos/list", {
        promos: resultats.rows,
      });
    } catch (error) {
      console.error(error);
      return res.send("Something went wrong dude");
    }
  },

  details: async (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM "promo" WHERE "id"=${id}`;

    try {
      const resultats = await client.query(query);
      const promo = resultats.rows[0];
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
