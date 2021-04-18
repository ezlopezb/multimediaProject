const Enumerable=require('linq-js');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
console.log("hola eduardo");

// CREAMOS CONEXION MYSQL

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sistema"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
  con.query("SELECT * FROM Users", function (err, result, fields) {
    console.log(result);
  });
});


//PROBAMOS EL GET A SPOTI
url = "";

var querystring = require('querystring');
var request = require('request');

request({
    headers: {
      'Accept': 'application/json' ,
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQDVw5icpHwSEdtw3Fuah3sjz3HQFFV794-OAE0Ze5oHlM4weJcvXwCCDu3CrKZUEsbNdqnxL1FyvXnSgszpg6lr4LAFkqtuosZ1hTR3cO6T3yYKW7jxJYKBbNExqRtmTm3YpZZYyGN8zCYIYNKN6cmiia3A4NF3lCJDFOm-cisjm7L5uCnIStYOKG78wA2FZ-a28nyW_xVRcnLWhCjg96HkeLKmuz62XfJi55EEsHSV2Ml2-m_27SGKfLkycDW5LElfltI7jBcasEedoZbhC5qRYL7VvnkjgcbE5-yZgf36'
    },
    uri: 'https://api.spotify.com/v1/albums/7rf1qZJ6hGSlPN7K9ShsVV',
    method: 'GET'
  }, function (err, res,data) {
    var resultRaw=JSON.stringify(data);
    var resultado=JSON.parse(data);
    console.log(resultado.tracks.items.name);
  });