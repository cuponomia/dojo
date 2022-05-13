// init project
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var url = String(process.env.HOSTNAME).split("-");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

// This route processes GET requests to "/"`
app.get("/", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

// // A route for POST requests sent to `/update`
// app.post("/update", function(req, res) {
//   if (!req.body.username || !req.body.data) {
//     console.log("Received incomplete POST: " + JSON.stringify(req.body));
//     return res.send({ status: "error", message: "missing parameter(s)" });
//   } else {
//     console.log("Received POST: " + JSON.stringify(req.body));
//     return res.send(req.body);
//   }
// });

// // A GET request handler for `/update`
// app.get("/update", function(req, res) {
//   var dummyData = {
//     username: "testUser",
//     data: "1234"
//   };
//   console.log("Received GET: " + JSON.stringify(req.body));
//   if (!req.query.username) {
//     return res.send({ status: "error", message: "no username" });
//   } else if (!req.query.data) {
//     return res.send({ status: "error", message: "no data" });
//   } else if (req.query.username != dummyData.username) {
//     return res.send({ status: "error", message: "username does not match" });
//   } else {
//     return res.send(dummyData);
//   }
// });

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
