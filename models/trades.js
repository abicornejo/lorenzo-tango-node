// Uncomment the code below to use Sequelize ORM
// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
const mongoose = require('mongoose');


// Insert your model definition below

let CounterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

let counter = mongoose.model('counter', CounterSchema);

const schema = new mongoose.Schema(
    {
        id: {
            desc: "id trade",
            type: Number,
            required: true,
        },
        type: {
            desc: "type trade.",
            trim: true,
            type: String,
            enum: ["buy", "sell"],
            default: "buy",
            required: true,
        },
        user_id: {
            desc: "The user Id.",
            trim: true,
            type: Number,
            unique: true,
            required: true,
        },
        symbol: {
            desc: "trade symbol",
            type: String,
            required: true,
        },
        shares: {
            desc: "Trade shares.",
            type: Number,
            required: true,
        },
        price: {
            desc: "Trade price.",
            type: Number,
            required: true,
        },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

// schema.pre('save', function(next) {
//     //if (this.isNew) {
//         let doc = this;
//         counter.findAndModify({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
//             if(error)
//                 return next(error);
//             doc.id = counter.seq;
//             next();
//         });
//     /*} else {
//         next();
//     }*/
// });


module.exports = mongoose.model("trade", schema);
