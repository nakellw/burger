var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger", function(req, res) {
  burger.insertOne([
    "burger_name", 
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.insertOne({
    devored:true
  }, condition,function(data){
    res.redirect("/");
  });
  console.log("condition", condition);
});


// Export routes for server.js to use.
module.exports = router;
