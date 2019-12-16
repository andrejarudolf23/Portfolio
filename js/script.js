$(window).on("load", function() {
	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: "*",
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
});

$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});

	var typed = new Typed('.typed', {
		strings: ['Web Developer', 'Software Engineer', 'Student'],
		typeSpeed: 70,
		startDelay: 1000,
		loop: true,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			938: {
				items:4
			}
		}
	});
    
    var skillsTopOffset = $(".skillsSection").offset().top; //get the position of the skillsSection
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false; 

    $(window).scroll(function() {


    	//check if the skillsSection is in the view or not, if it is then call pieChart
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 250) {
    		$('.chart').easyPieChart({
		        
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		    	}
			});

            $('.owl-carousel').owlCarousel({
                loop:true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    938: {
                        items:4
                    }
                }
            });
		}

		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

		    	element.countup(endVal);
		    });
		    countUpFinished = true;
		}

    });

    $("[data-fancybox]").fancybox({
    });

    $("#filters a").click(function() {

    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

    	 $(".items").isotope({

    	 	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

    	 return false;

    });

	const nav = $("#navigation");
	const navTop = nav.offset().top; //gets the position of the navigation bar when the page is loaded

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
	var body = $("body");

	//when we scroll past the navigation bar, then add class to the body
	if($(window).scrollTop() >= navTop) {
		body.css("padding-top", nav.outerHeight() + "px");
		body.addClass("fixedNav");
	}
	else {
		body.css("padding-top", 0);
		body.removeClass("fixedNav");
	}

	}

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top; //get the position of the page we clicked to go to

		if(targetElement == "#stats" || targetElement == "#contact") {
		$("html, body").animate({ scrollTop: targetPosition - 120 }, "slow")
		}
		else {
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
		}

	});

	$("#navigation a.navbar-brand").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;

		$("html, body").animate({ scrollTop: targetPosition - 100 }, "slow");
	});

});