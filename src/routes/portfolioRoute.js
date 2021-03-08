const express = require("express");
const router = express.Router();
const Portfolio = require("../models/portfolioModel");

 router.post("/contact", (req, res) => {
    const newPortfolio = new Portfolio({
      name     : req.body.name,
      email    : req.body.email,
      phone    : req.body.phone,
      address  : req.body.address,
      Subject  : req.body.Subject,
      Message  : req.body.Message
     
     })

     newPortfolio.save()
     .then(data => {
         res.json(data)
     })
        .catch(error => {
            res.json(error)
        })
 })


module.exports = router;