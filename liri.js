console.log("LIRI node-bot is locked and loaded");
// console.log(process.argv);
var argument = process.argv[2];
var uri = process.argv[2];     
var spotify = require('spotify');
//Twitter variables
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
}
// Spotify bot begins 
 spotify.search({ type: 'track', q: uri }, function(err, data) {
 
    // Do something with 'data' 
    console.log(data);
});

// else if(argument === "movie-this") {

// }else if(argument === "do-what-it-says") {

// }


  



