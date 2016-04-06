console.log("this is loaded");
var Twitter = require('twitter');
var keys = require('./keys.js');
var twit = new Twitter(keys);

var params = { 
  "id": 4910512006,
  "id-str": "4910512006",
  "count": 20
}

twit.get('search/tweets', params, gotData);

function gotData(error, tweets, response) {
  console.log(tweets);
  var tweetData = tweets.statuses;
  for(var i = 0; i < tweetData.length; i++) {
    console.log(tweetData[i].text);
  }
}
  



