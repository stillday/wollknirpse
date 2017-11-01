$(function(){
	
	// first script to pull posts
	
  var accessToken = '4189975435.daeb333.44964ca12422486ba897bb21b61b2e4d'; // use your own token
  
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 20 ) { return false; }
      $('<a class="post" href="#"> <img src=" '
        + this.images.standard_resolution.url + 
        '" /> '
        + this.likes.count +
        ' &hearts;</a>'
        ).appendTo('#instafeed');
    }); 
  });

});
