/*============================================
Theme Name : Alkali || Modern Business Theme
Url        : ariefulkhakim.github.io/arieful
Description: Arief is a personal landing page is beautiful design and elegant
Versi      : 0.01
Author     : Arieful Khakim
============================================*/

(function($) {
	'use strict';
	jQuery(document).ready(function(){

		// Smooth Scroll
		$('a.smooth_scroll').on("click", function (e) {
			e.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
		});
		
	    // Portfolio
		$('.project-wrapper').mixItUp();

		// Magnific Popup
		$('.portfolio-popup').magnificPopup({
		  	type: 'image',
		  		gallery: {
		      		enabled: true
		  		},
		  	zoom: {
		      	enabled: true,
		      	duration: 300, // don't foget to change the duration also in CSS
		      	opener: function(element) {
		          return element.find('img');
		      	}
		  	}
		});

		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:5,
		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		// Video Popup
	    var videoBtn = $(".video-popup-btn");

		    videoBtn.magnificPopup({
		        type: "iframe",
		        mainClass: "mfp-fade",
		        removalDelay: 500,
		        gallery: {
		            enabled: true
		        }
	    });

	});

})(jQuery);	