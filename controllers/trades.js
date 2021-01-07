/**
 * User controller : All business logic goes here
 */
const Trade = require("../models/trades");
//const bcrypt = require("bcryptjs");
/**
 * this method is to create the user
 */
exports.create = (req, res) => {

    /**
     * Create a trade
     */
    const trade = new Trade({
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

};
