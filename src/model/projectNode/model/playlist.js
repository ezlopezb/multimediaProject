import User from './user';
import Track from './track';
export default class Playlist{
    constructor(id,name,trackList,user){
        this.playlistId=id;
        this.name=name;
        this.trackList=trackList;
        this.owner=user;
        var duration=0;
        for(var i=0;i>trackList.length;i++){
            duration+=trackList[i].getDurationSecs();
        }
        this.duration=duration;
    }
    constructor(){
        this.playlistId=1;
        this.name="yiya";
        this.trackList=trackList[new Track()];
        this.owner=new User();
        this.duration=0;
    }
    getPlaylistId(){
        return this.playlistId;
    }
    setPlaylistId(id){
        this.playlistId=id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getTrackList(){
        return this.trackList;
    }
    setTrackList(list){
        return this.trackList;
    }
    getOwner(){
        return this.owner;
    }
    setOwner(user){
        this.owner=user;
    }
    getDurationSecs(){
        return this.duration;
    }
    getDurationMins(){
        var min=duration/60;
        var sec=duration%60;
        var retorno=min+":"+sec;
        return retorno;
    }
    setDuration(duration){
        this.duration=duration;
    }
   
}