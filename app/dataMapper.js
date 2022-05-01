const client = require("./dbClient");
const dataMapper = {
  getPromoById: async (id) => {
    const queryPromo = `SELECT * FROM "promo" WHERE "id" = ${id}`;
    return (await client.query(queryPromo)).rows[0];
  },
  getStudentsByPromoId: async (id) => {
    const queryStudents = `SELECT * FROM "student" WHERE "promo_id"=${id}`;
    return (await client.query(queryStudents)).rows;
  },

  getStudentById: async (id) => {
    const query = `SELECT * FROM "student" WHERE "id" =${id}`;
    return (await client.query(query)).rows[0];
  },
  getPromos: async () => {
    const query = `SELECT * FROM "promo"`;
    return (await client.query(query)).rows;
  },
  
};

module.exports = dataMapper;
