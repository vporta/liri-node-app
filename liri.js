console.log("LIRI node-bot is locked and loaded");
var argument = process.argv[2];
var request = require('request');
var fs = require('fs');
var spotify = require('spotify');
var Twitter = require('twitter');
var keys = require('./keys.js');
var twit = new Twitter(keys);

var params = { 
  "screen_name": "vinjporta",
  "count": 20
}
if(argument === "my-tweets"){
  twit.get('statuses/user_timeline', params, gotData);
  function gotData(error, data, response) {
    var tweets = data; //data is the object
    for(var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text); 
      console.log(tweets[i].created_at); 
    }
  };
}if(argument === "movie-this") {
    console.log(process.argv);
    var movieTitle = process.argv[3];
    request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json&tomatoes=true",function (error, response, body) {
        
        if (!error && response.statusCode == 200) {
        console.log(body);  
        }else {
            request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&r=json&tomatoes=true",function(error, response,body){
                console.log(body);
            })
        }
    })
}
// Spotify bot begins 
if(argument === "spotify-this-song") {
    var songTitle = process.argv[3];
    spotify.search({ type: 'track', query: songTitle }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
        var data = data.tracks.items;
        for(var i =0; i < data.length; i++){
            
            console.log(data[i].name); //song track name
            console.log(data[i].album.href); //url 
            console.log(data[i].album.name); //album name
            console.log(data[i].preview_url); //preview link to the song
        
            for(var j =0; j < data[i].artists.length; j++) {
                console.log(data[i].artists[j].name); //artist's name
            }
        }
    });
}
                



    // else if(argument === "do-what-it-says") {

// }


  



