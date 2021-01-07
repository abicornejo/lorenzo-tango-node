const express = require('express');
const router = express.Router();
const tradeModel = require('./../models/trades');


router.post('/create', function(req, res, next) {
    //res.send('<p>Hola  mundo</p>');

    /**
     * Create a trade
     */
    const trade = new tradeModel({
        id: req.body.id,
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
                message: err.message || "Some error occurred while creating the trade.",
            });
        });


});

router.put('/update', function(req, res, next) {
    res.send('<p>Hola  mundo</p>');
});

router.get('/show', function(req, res, next) {
    tradeModel.find()
        .sort({ name: -1 })
        .then((trades) => {
            res.status(200).send(trades);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
});

router.delete('/delete/:id', function(req, res, next) {
    tradeModel.findByIdAndRemove(req.params.id)
        .then((trade) => {
            if (!trade) {
                return res.status(404).send({
                    message: "Trade not found ",
                });
            }
            res.send({ message: "Trade deleted successfully!" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete trade ",
            });
        });
});

module.exports = router;
