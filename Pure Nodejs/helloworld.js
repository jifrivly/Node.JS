var http = require("http");
var dt = require("./myfirstmodule");
var url = require("url");
var fs = require("fs");

http
  .createServer(function(req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("The date and time are currently: " + dt.myDateTime());
    // res.write("<br> Hello " + req.url + " to the world of NODE.JS");

    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write("<br>" + txt);

    fs.readFile("file.html", function(err, data) {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      res.write("The date and time are currently: " + dt.myDateTime());
      res.write("<br> Hello " + req.url + " to the world of NODE.JS");

      var q = url.parse(req.url, true).query;
      var txt = q.year + " " + q.month;
      res.write("<br>" + txt);

      res.write(data);
      res.end();
    });

    fs.appendFile("mynewfile1.txt", "Hello content!", function(err) {
      if (err) throw err;
      console.log("Saved!");
      });

    fs.open("mynewfile1.txt", "Hello content!", function(err) {
      if (err) throw err;
      console.log("Saved!");
    });  
    // res.end();
  })
  .listen(8080);
