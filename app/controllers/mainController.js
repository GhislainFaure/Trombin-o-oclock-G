module.exports = {
  home: (req, res) => {
    console.log(req.session);
    res.render("home");
  },
};
