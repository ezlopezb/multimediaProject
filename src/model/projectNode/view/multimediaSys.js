var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);


//DESCOMENTAR EL SIGUIENTE CODIGO PARA CONSULTAR LA BASE DE DATOS

/*var conexiondb = require('../mysql/conexion-db')
const condb=new conexiondb("sistema");
condb.getcon().connect(function(err) {
  condb.getcon().query("SELECT * FROM track", function (err, result, fields) {
    console.log(result);
  });
});*/

var spotifyReq=require('../api/external/spotify-api');

const spoti=new spotifyReq(
  {'method':'GET'},
  'e497568334604e3dbf052f41c136408e',
  '16bb186046d94627b30385bdd9529208');
  
spoti.getAlbumTracks('7rf1qZJ6hGSlPN7K9ShsVV');







  

