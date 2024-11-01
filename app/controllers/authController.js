module.exports = {
  showLogin: (req, res) => {
    res.render("auth/login");
  },
  postLogin: (req, res) => {
    console.log(req.body);
    const { login } = req.body;
    if (login === "1234") {
      req.session.login = "glux";
    } else {
      req.session.login = req.body.login;
    }
    res.redirect("/");
  },
};
