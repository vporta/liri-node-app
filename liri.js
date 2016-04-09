// console.log(process.argv);
console.log("LIRI node-bot is locked and loaded");
var argument = process.argv[2];
// var uri = process.argv[3]; 

var request = require('request');
var fs = require('fs');
var spotify = require('spotify');
// console.log(spotify);
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
}else if(argument === "movie-this") {
    console.log(process.argv);
    var movieTitle = process.argv[3];
    //add it into url t=
    request('http://www.omdbapi.com/?t=The+Notebook&y=&plot=short&r=json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage. 
      }
    })
}
// Spotify bot begins 
else if(argument === "spotify-this-song") {
    var songTitle = process.argv[3];
    //add it into query
    spotify.search({ type: 'track', query: songTitle }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
        // Do something with 'data' 
        var data = data.tracks.items;
        for(var i =0; i < data.length; i++){

        console.log(data.items[i]);
        }
    });

}

    // else if(argument === "do-what-it-says") {

// }


  



