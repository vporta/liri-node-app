console.log(process.argv);

var command = process.argv[2];

exports.twitterKeys = {
  consumer_key: 'MD6IhRgNxCLp4iLu4kXbM24yi',
  consumer_secret: 'aISS2Hb9Kpe3RDw3cu29q8I0pOJKQJqmjGxaI94gnTWDTiBnsD',
  access_token_key: '4910512006-5T0Gg5jGfLMqvBUfaANmgri13x1gmZIu7yTvt08',
  access_token_secret: 'ovrKvqSOpodrrjLVR9IB8aI4bDWADMfR9Ry3PLHONGzEq'
}



if(command === "my-tweets"){
  console.log();
}else if(command === "spotify-this-song"){
  console.log();
}else if(command === "movie-this"){
  console.log();
}else if(command === "do-what-it-says"){
  console.log();
}

var baseURL = "https://userstream.twitter.com/1.1/user.json";
var flickrApiUrl2 = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + key + "&tags="+flickrTerms+"&per_page=10&page=1&format=json&nojsoncallback=1"
        
        // console.log(typeof flickrTerms);
            $.ajax({
                url: flickrApiUrl2,
                method: "GET",
                // data: request,
                // dataType: "json",
                json: true,
                success: function(flickrData){
                    console.log(flickrData);
                    var i;
                    for(var i=0; i<9; i++){

                    var photosFind = flickrData.photos.photo[i];
                    var photosFindUrl = 'https://farm'+ photosFind.farm + '.staticflickr.com/' + photosFind.server + '/' + photosFind.id + '_' + photosFind.secret +'.jpg';
                    var photoZoom = $('<a href="' + photosFindUrl + '">').addClass('fancybox');
                    var photoElem = $('<img src="' + photosFindUrl + '">').addClass('flickrImages');
   
                    $('#flickr-health').append(photoElem);
                    $('#flickr-health').append(photoZoom); 
                    photoZoom.append(photoElem);

                    };
                },