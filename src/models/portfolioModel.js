const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

    name    : String,
    email   : String,
    phone   : Number,
    address : String,
    Subject : String,
    Message : String

})

// const Portfolio = new mongoose.model("Portfolio", portfolioSchema);

// module.exports = Portfolio;


module.exports = mongoose.model("portfolioData", portfolioSchema);