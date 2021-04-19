class conexiondb{
constructor(database){
var mysql = require('mysql');
this.con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: database
});
//con.connect(function(err) {
  //if (err) throw err;
  //console.log("Connected!");
//});
}
getcon(){
    return this.con;
};

//con.connect(function(err) {
  //con.query("SELECT * FROM Users", function (err, result, fields) {
    //console.log(result);
  //});
//});
}
module.exports=conexiondb;