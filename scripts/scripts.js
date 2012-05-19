// Get Typekit Fonts
try{Typekit.load();}catch(e){}

$(document).ready(function() {
	
	// Global variables
	var y = $(window).scrollTop();
	
	var scrollSpeed = 500; //ms
	
	var nav_links = [$('#nav-item-shelter-for-pilgrims'),
					 $('#nav-item-vienna-house-of-music'),
					 $('#nav-item-vila-nova-de-gaia-public-library'),
					 $('#nav-item-cinematheque'),
					 $('#nav-item-collective-housing'),
					 $('#nav-item-student-housing'),
					 $('#nav-item-about')];
					 
	var sections = [$('#shelter-for-pilgrims'),
					$('#vienna-house-of-music'),
					$('#vila-nova-de-gaia-public-library'),
					$('#cinematheque'),
					$('#collective-housing'),
					$('#student-housing'),
					$('#about')];
	
	
	
	// Apply auto-scroller to the nav
	$('#nav').localScroll({
    	lock: true,
    	target:'body'
    });
    
    // Make title scroll to top
    $('h1').click(function() {
		$.scrollTo('0px', 500);
	});
	
	function getLocation() {
	    
	    var offset = 115;
	    
	    if (y < sections[0].position().top - offset) {
		    
		    ySection = 0;
		    return ySection;
		    
	    }
	    
	    for (section in sections) {
		    
		    if (y >= sections[section].position().top - offset && y < sections[section].position().top + sections[section].height() - offset) {
			    
			    ySection = sections.indexOf(sections[section]) + 1;
			    return ySection;
			    
		    }
		    
	    }
	    
	    if (y >= sections[sections.length-1].position().top - offset + sections[sections.length-1].height() - offset) {
		    
		    ySection = 7;
		    return ySection;
		    
	    }
	    
    }
    
    // Buttons up & down navigation
    $('#previous').click(function() {
	    var ySection = getLocation();
	   	if (ySection == 0 || ySection == 1) {
			if (y > 0) {
				$.scrollTo('0px', scrollSpeed);
			} else {return;}
		} else {
			var scrollPosition = sections[ySection-2].position().top;
			$.scrollTo(scrollPosition, scrollSpeed);
		}
	});
	$('#next').click(function() {
	    var ySection = getLocation();
	   	if (ySection == 7) {
			if (y > 0) {
				$.scrollTo('0px', scrollSpeed);
			} else {return;}
		} else {
			var scrollPosition = sections[ySection].position().top;
			$.scrollTo(scrollPosition, scrollSpeed);
		}
	});
	
	 // Arrows up & down navigation
    $(document).keydown(function(event) {
	    var ySection = getLocation();
	    if (event.keyCode == '38') {
		    event.preventDefault();
		    if (ySection == 0 || ySection == 1) {
			    if (y > 0) {
			    	$.scrollTo('0px', scrollSpeed);
			    } else {return;}
		    } else {
			    var scrollPosition = sections[ySection-2].position().top;
			    $.scrollTo(scrollPosition, scrollSpeed);
		    }
	    } else if (event.keyCode == '40') {
		    event.preventDefault();
		    if (ySection == 6 || ySection == 7) {return;}
		    var scrollPosition = sections[ySection].position().top;
		    $.scrollTo(scrollPosition, scrollSpeed);
	    }
	});

	$(window).scroll(function () {
		
		y = $(window).scrollTop();
		documentHeight = $('html').height();
		windowHeight = $(window).height();
		
		// Toggle top button on/off
		if (y >= 365) {
			$('nav > div > img').fadeIn("500");
		} else {
			$('nav > div > img').fadeOut("500");
		}
		
		// Make nav items higlight when visible
		var offset = 30;
		var padding = 150;
		
		var item1 = $("#shelter-for-pilgrims").position().top;
		var item2 = $("#vienna-house-of-music").position().top;
		var item3 = $("#vila-nova-de-gaia-public-library").position().top;
		var item4 = $("#cinematheque").position().top;
		var item5 = $("#collective-housing").position().top;
		var item6 = $("#student-housing").position().top;
		var item7 = $("#about").position().top;
	
		if (y >= item1 - offset && y <= item1 + $("#shelter-for-pilgrims").height() - offset + padding) {
			$("#nav-item-shelter-for-pilgrims").addClass("active");
		} else {
			$("#nav-item-shelter-for-pilgrims").removeClass("active");
		}
	
		if (y >= item2 - offset && y <= item2 + $("#vienna-house-of-music").height() - offset + padding) {
			$("#nav-item-vienna-house-of-music").addClass("active");
		} else {
			$("#nav-item-vienna-house-of-music").removeClass("active");
		}
	
		if (y >= item3 - offset && y <= item3 + $("#vila-nova-de-gaia-public-library").height() - offset + padding) {
			$("#nav-item-vila-nova-de-gaia-public-library").addClass("active");
		} else {
			$("#nav-item-vila-nova-de-gaia-public-library").removeClass("active");
		}
	  
		if (y >= item4 - offset && y <= item4 + $("#cinematheque").height() - offset + padding) {
			$("#nav-item-cinematheque").addClass("active");
		} else {
			$("#nav-item-cinematheque").removeClass("active");
		}
	  
		if (y >= item5 - offset && y <= item5 + $("#collective-housing").height() - offset + padding) {
			$("#nav-item-collective-housing").addClass("active");
		} else {
			$("#nav-item-collective-housing").removeClass("active");
		}
		
		if (y >= item6 - offset && y <= item6 + $("#student-housing").height() - offset + padding) {
			$("#nav-item-student-housing").addClass("active");
		} else {
			$("#nav-item-student-housing").removeClass("active");
		}

		if (y >= documentHeight - (windowHeight) - offset) {
			$("#nav-item-about").addClass("active");
			$("#nav-item-student-housing").removeClass("active");
		} else {
			$("#nav-item-about").removeClass("active");
		}
	});
});
