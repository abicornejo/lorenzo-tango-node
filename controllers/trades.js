/**
 * User controller : All business logic goes here
 */
const Trade = require("../models/trades");
//const bcrypt = require("bcryptjs");
/**
 * this method is to create the trade
 */
exports.create = (req, res) => {

    /**
     * validation request
     */
    if (req.body.shares < 1 && req.body.shares > 100) {
        return res.status(400).send({
            message: "Shares should be has a range between 1 and 100",
            error:400
        });
    }

    if (req.body.type !== 'buy'  && req.body.type !== 'sell') {
        return res.status(400).send({
            message: "Type value should be 'buy' or 'sell'",
            code: 400
        });
    }

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
            res.status(201).send({
                trade: data,
                code: 201
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the trade.",
            });
        });
};

/**
 * Find all trades
 */
exports.findAll = (req, res) => {
    Trade.find()
        .sort({ id: -1 })
        .then((trades) => {
            res.status(200).send(trades);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
};

/**
 * Find one Trade
 */
exports.findOne = (req, res) => {
    Trade.findById(req.params.id)
        .then((trade) => {
            if (!trade) {
                return res.status(404).send({
                    message: "Trade not found with id " + req.params.id,
                });
            }
            res.status(200).send(trade);
            console.log(trade);
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.id,
            });
        });
};

/**
 * Delete a trade with the specified id in the request
 */
exports.delete = (req, res) => {
    Trade.findByIdAndRemove(req.params.id)
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
};

/**
 * Update a trade with the specified id in the request
 */
exports.UpdateTrade = (req, res) => {
    // if (!req.body.email || !req.body.password || !req.body.name) {
    //     res.status(400).send({
    //         message: "required fields cannot be empty",
    //     });
    // }
    Trade.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((trade) => {
            if (!trade) {
                return res.status(404).send({
                    message: "no trade found",
                });
            }
            res.status(200).send(trade);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};
