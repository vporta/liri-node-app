console.log("LIRI node-bot is locked and loaded");
var argument = process.argv[2];
//Twitter bot begins
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
    var tweets = data;
    for(var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
      console.log(tweets[i].created_at);
    }
  };
}else {
  console.log("nothing");
}
//Twitter bot ends 

// 


  



