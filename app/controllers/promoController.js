const promos = require('../../data/promos.json');

module.exports = {
    
    list: (req, res) => {
        res.render('promos/list', {
            promos
        });

    },

    details: (req, res, next) => {
        const id = req.params.id;

         promo = promos.find((promo) => {
            return  promo.id === Number(id);
        });
        res.render('promos/details', {promo});

    },

};
