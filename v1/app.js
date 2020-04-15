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
// app.get("/graphs", function(req, res) {
//     request("https://corona-stats.online/?format=json", function(err, response, body) {

//         if (!err && response.statusCode == 200) {
//             var data = JSON.parse(body);
//             console.log(data);
//             res.render("graphs", { data: data });

//         }



//     });

// });


app.get("/country/india", function(req, res) {
    // request("https://corona-stats.online/?format=json", function(err, response, body) {

    //     if (!err && response.statusCode == 200) {
    //         var data = JSON.parse(body);
    //         console.log(data);
    //         res.render("graphs", { data: data });

    //     }



    // });
    var unirest = require("unirest");

    var req = unirest("GET", "https://covid19india.p.rapidapi.com/getStateData/TN");

    req.headers({
        "x-rapidapi-host": "covid19india.p.rapidapi.com",
        "x-rapidapi-key": "5f2fdc8921mshb144507e156592bp151927jsn9b02cc278f04"
    });


    req.end(function(res) {
        if (res.error) throw new Error(res.error);

        res.send(body);
    });
    Home

});



app.listen(3000, function(req, res) {
    console.log("server has started");
})