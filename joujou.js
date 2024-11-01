// authController



module.exports = {
    // afficher le formulaire

    showLogin: (req, res) => {
        res.render('auth/login');
    },
    // gérer le formulaire
    postLogin: (req, res) => {
      const userLogin = req.body.login;


      
    }
}