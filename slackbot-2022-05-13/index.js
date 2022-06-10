// init project
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var url = String(process.env.HOSTNAME).split("-");
var postImage = require("./postImage.js");

const fetch = require("node-fetch");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async function(req, res) {
  console.log('req.body', req.body);
  
  const lastMemeData = await fetch('https://xkcd.com/info.0.json').then((res) => res.json()).catch(() => { console.log('deu banana') });
  const currentNum = Math.floor(Math.random() * lastMemeData.num);
  const currentMemeData = await fetch(`https://xkcd.com/${currentNum}/info.0.json`).then((res) => res.json()).then(result => result).catch(() => { console.log('deu banana') });
  console.log(currentMemeData)
  
  postImage('#team_dev');

  res.sendStatus(200);
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
