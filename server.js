var express = require('express');
var bodyParser = require('body-parser');
const csvFilePath='order.csv'
const csv=require('csvtojson')


var app = express();

app.use('/', express.static('./'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/about', function(req,res){
	// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Convert a csv file with csvtojson
	csv()
    .fromFile(csvFilePath)
    .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.
     
     console.log(jsonArrayObj); 

	
	res.json(jsonArrayObj);
   })





});

app.listen(8001);
