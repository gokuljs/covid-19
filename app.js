var express = require("express");
var app = express();
var request = require("request");


//var corona = require("coronavirus-tracker-cli");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");

});

app.get("/country", function(req, res) {
    request("https://corona-stats.online/?format=json", function(err, response, body) {

        if (!err && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log(data);
            res.render("country", { data: data });

        }



    });

});

app.listen(3000, function(req, res) {
    console.log("server has started");
})