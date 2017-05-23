//dependecies
var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res){
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name_input
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition ", condition);

    burger.updateOne({
        devoured: 1
    }, condition, function(){
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;