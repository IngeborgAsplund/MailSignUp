const express = require('express');
const bodyParser = require('body-parser');
const request = require ('request');
const https = require ('https');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){

  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.mail;

  const data ={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME: firstname,
          LNAME: lastname
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/d93e611a90";
  const options = {
    method:"POST",
    auth:"udemycourse:0703065e3a8d70b6609cd7152f971a24-us21"
  };

  const request = https.request(url, options, function(response){
    response.on("data",function(data){
      const status = response.statusCode;
      if(status === 200){
        res.sendFile(__dirname+"/success.html");
      }
      else{
        res.sendFile(__dirname+"/failure.html");
      }
    });
  });
  request.write(jsonData);
  request.end();
});
app.post("/failure",function(req,res){
  res.redirect("/");
});
app.listen(process.env.PORT ||3000, function(){
  console.log("up and running on port 3000")
});

//0703065e3a8d70b6609cd7152f971a24-us21 api key mailchimp
//d93e611a90 audience id
