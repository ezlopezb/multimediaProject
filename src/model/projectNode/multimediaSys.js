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

//con.connect(function(err) {
  //con.query("SELECT * FROM Users", function (err, result, fields) {
    //console.log(result);
  //});
//});


//PROBAMOS EL GET A SPOTI
url = "";

var querystring = require('querystring');
var request = require('request');
const dataset=new Array(); //tomamos una fila por dataset del track extraido y una columna por track
var datarecords;
request({
    headers: {
      'Accept': 'application/json' ,
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQDkb0AWS_WA85iw0uZOwKAbwtpY7uwPMumWkKyi4RbVQqD_Z5nY0hK4hdRztXZM9GG7R7H2GRa2gNfynMXjmeBZWqvrGrUY_HslrLK_tsxJceWXaO3Mc31G2X9hghyAYqwRd17eZ9_wBhDR7QltZuyScUOb13AAD-HufIci9PXTa1CdA7WyfPIPzUimmih38USYMOOZbgWy_uXr6Om13frFkIKNwiC4CiGnW-X90a4tFFa2Zam31v59fJ4hLUUrubqzsor8Bwk-IO-ojyJmdNQJrUZr1UuoP8Mc6UXB7DdE'
    },
    uri: 'https://api.spotify.com/v1/albums/7rf1qZJ6hGSlPN7K9ShsVV',
    method: 'GET'
  }, function (err, res,data) {
    var resultado=JSON.parse(data);
    console.log("json cargado");
    datarecords=resultado.tracks.items.length;
    for(var i=0; i<datarecords; i++) {
        dataset[i] =new Array(9);
        for(var j=0; j<9; j++) {
            dataset[i][j] = "";
     
          }
    }
    for(var i=0; i<resultado.tracks.items.length;i++){
      dataset[i][0]="null";
      dataset[i][1]=resultado.tracks.items[i].name.toString();
      dataset[i][2]=(parseInt(resultado.tracks.items[i].duration_ms)/1000).toString();
      dataset[i][3]="spotify";
      dataset[i][4]=resultado.tracks.items[i].external_urls.spotify.toString();
      dataset[i][5]=0;
      dataset[i][6]=0;
      dataset[i][7]=resultado.genres.toString();
      dataset[i][8]=resultado.tracks.items[i].id.toString();
    };
    var query="insert into track";
    for (var i=0; i<datarecords;i++){
     query+=" values ("
     for (var j=0; j<9;j++){
        query+=dataset[i][j]+", ";
        if (j=8){
          query+=")";
        }
      }
    }
    console.log(query)
  });
  var query="insert into track";
  for (var i=0; i<datarecords;i++){
    query+=" values (";
    for (var j=0; j<9;j++){
      query+=dataset[i][j]+", ";
      if (j=8){
        query+=")";
      }
    }
  }
  console.log(query)

  

