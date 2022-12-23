var express = require("express");
var mysql = require("mysql");
const app = express();
var mysql = require("mysql");
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
var connection = mysql.createConnection({
    host: "localhost",
    database: "cointab-2",
    user: "root",
    password: "123",
    insecureAuth: true,
  });

    app.get("/data", function (request, response){

      connection.query("SELECT * FROM  user ", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      response.status(200).send(result)
    });
  });
  app.delete("/",function (request, response){

    connection.query("DELETE FROM user", function(err,results,fields){
      if(err) throw err
      response.status(200).send(results)
    })
  
  })
app.post("/",function (request, response){

  const data =  request.body

  connection.query("INSERT INTO user SET?",data, function(err,results,fields){
    if(err) throw err
    response.status(200).send(data)
  })

})
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connection successful");
  });
  
  app.listen(8085, function () {
    console.log("App Listening On port 8085");
  });
  