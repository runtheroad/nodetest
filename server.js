var express = require("express");
var app  = express();

app.get("/posts", function(req, res){
	var data = '\n HEEELLLOOO WRLD \n ' + Date.now(); + '\n'
	res.send(data);
	}	
);


var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("App listening at http://%s:%s", host, port);
});
 
