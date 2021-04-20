const conexiondb = require('../mysql/conexion-mysql');

class conexiondbRoute{
    constructor(){
        this.con=new conexiondb("sistema");
    }
    getConex(){
        return this.con
    }
}
module.exports = conexiondbRoute;