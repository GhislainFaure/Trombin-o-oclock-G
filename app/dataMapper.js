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
  getStudents: async () => {
    const query = `SELECT * FROM "student"`;
    return (await client.query(query)).rows;
  },
  saveStudent: async (studentInfos) => {
    const { first_name, last_name, github_username, promo } = studentInfos;
    const query = `INSERT INTO student (first_name, last_name, github_username, profile_picture_url, promo_id)
    VALUES ($1, $2, $3, $4, $5)`;

    const values = [
      first_name,
      last_name,
      github_username,
      `https://github.com/${github_username}.png`,
      Number(promo),
    ];
    const result = await client.query(query, values);

    return Boolean(result);
  },
};

module.exports = dataMapper;
