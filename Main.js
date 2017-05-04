console.log('Hello Bhuyan');
var requestCount=0;
var http = require("http");
var fs = require('fs');
var url = require('url');

var server=http.createServer(function (request, response) 
{
  
  if (request.url!='/favicon.ico')
  {
   	requestCount+=1;
   	console.log('Request Number: ' + requestCount);
   	
	}
});
server.on('request', function(request, response) 
{
  	var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    if (pathname=='/GetData')
    {

      setTimeout(function()
      {
          response.setHeader('Access-Control-Allow-Origin', '*');
          response.writeHead(200, {'Content-Type': 'text/json'});
           var json = JSON.stringify([
                { 
                    firstName: "Manas", 
                    lastName: "Bhuyan", 
                    salary: "2000"
                },
                { 
                    firstName: "Aneesh", 
                    lastName: "Bhat", 
                    salary: "4000"
                },
                { 
                    firstName: "Arjun", 
                    lastName: "Mohan", 
                    salary: "8000"
                }]);
      response.write(json);	
      response.end();

      },2000);
     
    }
    else
    {
      response.setHeader('Access-Control-Allow-Origin', '*');
     response.writeHead(200, {'Content-Type': 'text/json'});
     
     response.write('Hello');	
     response.end();
    }
  

   
   
});
server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');



