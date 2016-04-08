console.log("this is loaded");
// console.log(process.argv);
var Twitter = require('twitter');
var keys = require('./keys.js');
var twit = new Twitter(keys);

var params = { 
  "screen_name": "vinjporta",
  "count": 20
}

twit.get('statuses/user_timeline', params, gotData);

function gotData(error, data, response) {
  var tweets = data;
  for(var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
  



