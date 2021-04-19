var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

//DESCOMENTAR EL SIGUIENTE CODIGO PARA CONSULTAR LA BASE DE DATOS

/*var conexiondb = require('./conexion-db')
const condb=new conexiondb("sistema");
condb.getcon().connect(function(err) {
  condb.getcon().query("SELECT * FROM track", function (err, result, fields) {
    console.log(result);
  });
});*/

var spotifyReq=require ('./spotify-api');
const spoti=new spotifyReq({'method':'GET'});
spoti.getAlbumTracks('7rf1qZJ6hGSlPN7K9ShsVV');







  

