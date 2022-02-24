const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
app.use(express.static("public"));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use(bodyParser.json());


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });