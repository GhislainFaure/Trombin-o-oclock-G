const client = require("../dbClient");

module.exports = {
  studentsByPromo: async (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM "promo" WHERE "id"=${id}`;
    const queryStudents = `SELECT * FROM "student" WHERE "promo_id"=${id}`;

    try {
      const promo = (await client.query(query)).rows[0];
      if (promo) {
        const students = (await client.query(queryStudents)).rows;

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
    const query = `SELECT * FROM "student" WHERE "id" =${id}`;

    try {
      const student = (await client.query(query)).rows[0];
      if (student) {
        const queryPromo = `SELECT "name" FROM "promo" WHERE "id" = ${student.promo_id}`;
        const promo = (await client.query(queryPromo)).rows[0];
        res.render("students/details", {
          student, promo
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
