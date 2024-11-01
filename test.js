// Je récupère l'element Client depuis la bibliotheque pg
const { Client } = require("pg"); // { Client: quequechose  }

// On créé un client de connection à la base de donnée avec une connection string
// <protocol>://<user>:<password>@<host>:<port>/<database>
// postgresql://
const client = new Client(process.env.PGURL);

// Je me connecte
client.connect();

// client.query(`SELECT * FROM "student" WHERE "promo_id" = 358`, (err, resultats) => {
//     if(err) {
//         return console.error("Sh*t wen't wrong, dude ! ", err);
//     }

//     console.log(resultats.rows);

// });
module.exports = client;
