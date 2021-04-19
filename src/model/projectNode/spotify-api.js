class spotifyReq{
    constructor(option){
    this.https = require('https')
    this.options=option;
    /*const options = {
    hostname: 'api.spotify.com',
    port: 443,
    path: '/todos',
    method: 'GET'
    }*/
    }   


getAlbumTracks(albumid){
    const dataset=new Array(); //tomamos una fila por TRACK una columna por CAMPO DE INFO
    var datarecords=0; //MAS ADELANTE GUARDAMOS LA CANTIDAD DE TRACKS EN ESTA VARIABLE
    var responseData;
    this.options={
        method: 'GET',
        hostname:'api.spotify.com',
        path: '/v1/albums/'+albumid,
        headers:{
            'Accept': 'application/json' ,
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BQC_I7DiRqgQElWBusW4FQKanyROAhctlK7YUR4Iv_0L2uZRxqlBo4KlbGtFaAC-R5nccMbpcoy63pvTsSBH5p4HwlsTIgAvDXb3_BRmqgrdb1qdEYJnWvhnbXnIBoV1aMTXq4XqqFYMyLsbmON-1_D-fFJPEPl0TXJGu3eQRaOdry2UdJbS-LfMUopcRzuPxcSZOo9FkfV2sImKKFOm_1LH9SyuXhm-EOKaHXdOcxCpFrOARscUOTKQkFS9JXNUCxsw2yQLgG8arez4TYqetG3DTxspoVOtjngbIFj16qxe'
        }
    }
    const req = this.https.request(this.options, res => {
        console.log(`statusCode: ${res.statusCode}`)
        res.on('data', d => {
            responseData=JSON.parse(d);
            console.log(d);
          })
        });
        datarecords=responseData.tracks.items.length;
        for(var i=0; i<datarecords; i++) {
        dataset[i] =new Array(9);
            for(var j=0; j<9; j++) {
                dataset[i][j] = "";
            }
        }
        //CARGAMOS INFORMACION DE LOS TRACKS EN LA MATRIZ
        for(var i=0; i<responseData.tracks.items.length;i++){
            dataset[i][0]="null";
            dataset[i][1]=responseData.tracks.items[i].name.toString();
            dataset[i][2]=(parseInt(responseData.tracks.items[i].duration_ms)/1000).toString();
            dataset[i][3]="spotify";
            dataset[i][4]=responseData.tracks.items[i].external_urls.spotify.toString();
            dataset[i][5]="null";
            dataset[i][6]="null";
            dataset[i][7]=responseData.genres.toString();
            dataset[i][8]=responseData.tracks.items[i].id.toString();
        }
        return dataset;
}
       
     /*   //CREAMOS LA QUERY
        var query="insert into track values";
        for (i=0; i<datarecords; i++){
            query+="(";
            for (j=0; j<9; j++){
                if(j<8){
                    if(dataset[i][j]!="null"){
                        query=query+"'"+dataset[i][j]+"'"+", ";
                    }else{
                        query=query+dataset[i][j]+", ";
                    }
                }
            else{
                if (i!=datarecords-1){
                    query=query+"'"+dataset[i][j]+"'"+"), ";
                }
                else{
                    query=query+"'"+dataset[i][j]+"'"+")";
                }
            }
            };
        };
        console.log("select * from track;");
        con.query(query, function(err,result){
        console.log(result);
        });
    })

    req.on('error', error => {
        console.error(error)
    })

    req.end();
};*/


 /*   defaultGet(){
        const conect=new conexiondb();
        var con=conect.getcon();
        url = "";
        var querystring = require('querystring');   
        var request = require('request');
        const conexiondb = require('./conexion-db');
        const dataset=new Array(); //tomamos una fila por TRACK una columna por CAMPO DE INFO
        var datarecords=0; //MAS ADELANTE GUARDAMOS LA CANTIDAD DE TRACKS EN ESTA VARIABLE
        request({
            headers: {
                'Accept': 'application/json' ,
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQA2lyBD7jugmAxx_kfHV64mobKhL4LAzbzmtYeUVIJItyNqIBD2KJUZgGcJWrReTaq59iz36eYarY8Uka0D8l6EqcwKfpit5w1FFM25Fyxg3yOkaMg7PlDFppD-wYXWTpZ4OOMqjPemJ7yd7g5uUQY5sWuqA5Cn0pSM0FJzJ2HGwYFWpuLPwWd71dU16IqNSKp8TjgEcQ9R3ruP-uqVW8FvbrUuMZt-XBQdYQTugRWfY9EVeC6bDe69jdoTP16ZoHTKQKlhXuPxq3XkxTiaMVP2dYNANRrthxLeIM9p5JJX'
        },
        uri: 'https://api.spotify.com/v1/albums/7rf1qZJ6hGSlPN7K9ShsVV',
        method: 'GET'
        }, 
        function (err, res,data) {
        var resultado=JSON.parse(data);
        console.log("json cargado");
        datarecords=resultado.tracks.items.length;
        for(var i=0; i<datarecords; i++) {
        dataset[i] =new Array(9);
            for(var j=0; j<9; j++) {
                dataset[i][j] = "";
     
            }
        }
        //CARGAMOS INFORMACION DE LOS TRACKS EN LA MATRIZ
        for(var i=0; i<resultado.tracks.items.length;i++){
            dataset[i][0]="null";
            dataset[i][1]=resultado.tracks.items[i].name.toString();
            dataset[i][2]=(parseInt(resultado.tracks.items[i].duration_ms)/1000).toString();
            dataset[i][3]="spotify";
            dataset[i][4]=resultado.tracks.items[i].external_urls.spotify.toString();
            dataset[i][5]="null";
            dataset[i][6]="null";
            dataset[i][7]=resultado.genres.toString();
            dataset[i][8]=resultado.tracks.items[i].id.toString();
        };
        //CREAMOS LA QUERY
        var query="insert into track values";
        for (i=0; i<datarecords; i++){
            query+="(";
            for (j=0; j<9; j++){
                if(j<8){
                    if(dataset[i][j]!="null"){
                        query=query+"'"+dataset[i][j]+"'"+", ";
                    }else{
                        query=query+dataset[i][j]+", ";
                    }
                }
            else{
                if (i!=datarecords-1){
                    query=query+"'"+dataset[i][j]+"'"+"), ";
                }
                else{
                    query=query+"'"+dataset[i][j]+"'"+")";
                }
            }
            };
        };
        console.log("select * from track;");
        con.query(query, function(err,result){
        console.log(result);
        });
    });
}*/}
module.exports=spotifyReq;
