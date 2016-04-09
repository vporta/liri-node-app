// console.log(process.argv);
console.log("LIRI node-bot is locked and loaded");
var argument = process.argv[2];
// var uri = process.argv[3]; 

var request = require('request');
var fs = require('fs');
var spotify = require('spotify');
console.log(spotify);
var Twitter = require('twitter');
var keys = require('./keys.js');
// var ombd = require('./omdb.js');
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
}
// Spotify bot begins 
// else if(argument === "spotify-this-song") {
//     var params = {
//         'type': 'track',
//         'q': uri   
//     }
//     spotify.search

// }

else if(argument === "movie-this") {
    var movieTitle = process.argv[3];
    request('http://www.omdbapi.com/?t=The+Notebook&y=&plot=short&r=json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage. 
      }
    })
}

    // else if(argument === "do-what-it-says") {

// }


  



