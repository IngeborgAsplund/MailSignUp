const express = require('express');
const bodyParser = require('body-parser');
const request = require ('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){

  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.mail;
  console.log(firstname +" " + lastname + " " + email);
});

app.listen(3000, function(){
  console.log("up and running on port 3000")
});
