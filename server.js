const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var controller = require("./dataController")


  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  

  
  app.post("/api/v1/parse", function (req,res) {
    let data = req.body.data || {}
    const dataToSend = controller.getParseData(data, "v1");
    res.json({
      statusCode: 200,
      data: dataToSend
    })
  })

   app.post("/api/v2/parse", function (req,res) {
    let data = req.body.data || {}
    const dataToSend = controller.getParseData(data, "v2")
    res.json({
      statusCode: 200,
      data: dataToSend
    })
  })

 
   app.listen("5002", function () {
   var host = "localhost"
   var port = "5002"   
   console.log("Example app listening at http://%s:%s", host, port)
});
