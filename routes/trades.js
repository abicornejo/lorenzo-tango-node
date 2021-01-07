const express = require('express');
const router = express.Router();
const tradeModel = require('./../models/trades');


router.post('/create', function(req, res, next) {
    //res.send('<p>Hola  mundo</p>');

    /**
     * Create a trade
     */
    const trade = new tradeModel({
        type: req.body.type,
        user_id: req.body.user_id,
        symbol: req.body.symbol,
        shares: req.body.shares,
        price: req.body.price
    });

    trade
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User.",
            });
        });


});

router.put('/update', function(req, res, next) {
    res.send('<p>Hola  mundo</p>');
});

router.get('/show', function(req, res, next) {
    res.send('<p>Hola  mundo</p>');
});

router.delete('/delete/:id', function(req, res, next) {
    res.send('<p>Hola  mundo</p>');
});

module.exports = router;
