export default class Track{
    constructor(name,extID,source,url,duration,artist,rating,artistUrl){
        this.name=name;
        this.externalId=extID;
        this.source=source;
        this.url=url;
        this.duration=duration;
        this.artist=artist;
        this.rating=rating;
        this.artistUrl=artistUrl;
    }
    constructor(){
        this.name="Shapeshifter";
        this.externalId="7yLzGp7vC3qg5FlBmUa8Rg";
        this.source="spotify";
        this.url="https://open.spotify.com/track/7yLzGp7vC3qg5FlBmUa8Rg?si=NyChV0fvRHujWZV11zs-RA";
        this.duration=217;
        this.artist="Celldweller";
        this.rating=5;
        this.artistUrl="https://open.spotify.com/artist/4BKyei61gtyDFxlKhcvBJJ?si=hJLquR6WT_WVdn7_-8tX5w"
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getExternalId(){
        return this.externalId;
    }
    setExternalId(id){
        this.externalId=id;
    }
    getSource(){
        return this.source;
    }
    setSource(source){
        this.source=source;
    }
    getUrl(){
        return this.url;
    }
    setUrl(url){
        this.url=url;
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
    getArtist(){
        return this.artist;
    }
    setArtist(artist){
        this.artist=artist;
    }
    getRating(){
        return this.rating;
    }
    setRating(number){
        this.duration=number;
    }
    getArtistUrl(){
        return this.artistUrl;
    }
    setArtistUrl(url){
        this.artistUrl=url;
    }
}