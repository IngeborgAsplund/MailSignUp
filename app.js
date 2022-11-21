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

  var data ={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          
        }
      }
    ]
  }
});

app.listen(3000, function(){
  console.log("up and running on port 3000")
});

//0703065e3a8d70b6609cd7152f971a24-us21 api key mailchimp
//d93e611a90 audience id
