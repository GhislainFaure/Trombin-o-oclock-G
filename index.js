require("dotenv").config();
// import des bibliothèques et ressources requises pour initialiser l'app web
const express = require("express");
// const bodyParser = require("body-parser");
// const multer = require("multer"); // v1.0.5
// const upload = multer(); // for parsing multipart/form-data
const router = require("./app/router");

// création de notre objet express
const app = express();
const PORT = process.env.PORT || 5050;

// on configure les vues et le moteur de template
app.set("views", "./app/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("./public"));
// app.use(bodyParser.json()); // for parsing application/json

app.use(router);

//en dernier recours si aucune route n'est appelée , j'affiche la page 404
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
