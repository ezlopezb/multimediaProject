const conexiondb = require('../../mysql/conexion-mysql');
const conexiondbRoute = require('../require');

class spotifyReq{
    constructor(option,clientid,clientsecret){
    this.https = require('https');
    this.options=option;
    this.request = require('request');
    this.client_id=clientid;
    this.client_secret=clientsecret;
    this.authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer.from(this.client_id + ':' + this.client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    this.result="void";
    /*const options = {
    hostname: 'api.spotify.com',
    port: 443,
    path: '/todos',
    method: 'GET'
    }*/
    }   

getAlbumTracks(albumid){
  var resultado='1';
  const request=this.request;
  request.post(this.authOptions, function(error, response, body) {
     this.result='2';
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: '	https://api.spotify.com/v1/albums/'+albumid+'/tracks',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(`statusCode: ${response.statusCode}`)
        //console.log(body)
        var conect=require('../require')
        var conectio= new conexiondbRoute()
        conectio.getNode().getcon().query('select * from track',function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        })

    })}
})
}
}
module.exports=spotifyReq;
