drop database if exists sistema;
create database sistema;
use sistema;
create table Users(
userid int primary key auto_increment,
email varchar(50),
nombre varchar(50),
dateofbirth date,
country varchar(50),
sex char(1),
passphrase varchar(10)
);
create table Playlist (
playlistid int primary key auto_increment,
nombre varchar(50),
userid int,
foreign key(userid) references Users(userid)
);
create table Artist(
artistid int primary key auto_increment,
nombre varchar(50),
artistUrl varchar(100),
descripcion varchar(200),
isYiya bool default TRUE
);
create table Track (
trackid int primary key auto_increment,
nombre varchar(50),
duration int,
fuente varchar(50),
url varchar(250),
rating int,
artistid int,
genreid int,
externalid varchar(100),
foreign key(artistid) references Artist(artistid)
);
create table Playlist_Track(
trackid int,
playlistid int,
foreign key(trackid) references Track(trackid),
foreign key(playlistid) references Playlist(playlistid),
primary key(trackid, playlistid)
);



