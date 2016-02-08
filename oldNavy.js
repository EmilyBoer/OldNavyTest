


$(".navbarToggle").click(function(){ 
    $(".navbar-nav, .navbar-left").toggle();
    $(".store-links, #postings, #map, #brand, .img-responsive").css({"opacity": "0.2"});
    $(".navbar-text, .navbar-default, .navbar-nav>li>a").css({"color": "black"});
    $(".carousel-indicators, #input-box, #brand, #jumbo-banner, #jumbo-social-tags-top").css({"opacity": "0.2"});
});

$.getJSON('jobs.JSON', function (data){
	$.each(data.stores, function(){
		$("div#storeList").append('<ul><li class= "job-title" >' + this['job'] + 
			'</li> <li class= "job-location">' + this['location'] +  
			'</li> <li class= "job-description">' + this['description'] + 
			'</li> <li class= "apply1">' + this['apply'] + '</li></ul><br/>');
  });
});


$.getJSON('jobs.JSON', function (data){
	$.each(data.headquarters, function(){
		$("div#stores").append('<ul><li class= "job-title" >' + this['job'] + 
			'</li> <li class= "job-location">' + this['location'] +  
			'</li> <li class= "job-description">' + this['description'] + 
			'</li> <li class= "apply2">' + this['apply'] + '</li></ul><br/>');
  });
});



$.getJSON('jobs.JSON', function (data){
	$.each(data.international, function(){
		$("div#international").append('<ul><li class= "job-title" >' + this['job'] + 
			'</li> <li class= "job-location">' + this['location'] +  
			'</li> <li class= "job-description">' + this['description'] + 
			'</li> <li class= "apply3">' + this['apply'] + '</li></ul><br/>');
  });
});

