export default class User{
    constructor (userid,name,mail,dob,country,sex,password){
    this.userid=userid;
    this.name=name;
    this.email=mail;
    this.dateOfBirth=dob;
    this.country=country;
    this.sex=sex;
    this.password=password;
    }
    constructor(){
        this.userid=null;
        this.name="EMPTY";
        this.email="lopezezequiel9611@gmail.com";
        this.dob=Date(1970,01,01);
        this.country="United States of America";
        this.sex="Male";
        this.password="123456";
    }
    getUserId(){
        return this.userid;
    }
    setUserId(id){
        this.userid=id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(mail){
        this.email=mail;
    }
    getDoB(){
        return this.dateOfBirth;
    }
    setDoB(dob){
        this.dateOfBirth=dob;
    }
    getcountry(){
        return this.country;
    }
    setCountry(country){
        this.country=country;
    }
    getSex(){
        return this.getsex;
    }
    setSex(sex){
        this.sex=sex;
    }
    getPassword(){
        return this.password;
    }
    setPassword(pass){
        this.password=pass;
    }
}