(function($) {
	"use strict"
	/* + Gallery Large */
	function gallery() {
		if($(".gallery-list").length) {
			var $container = $(".gallery-list");
			$container.isotope({

				layoutMode: 'fitRows',

				percentPosition: true,

				itemSelector: ".gallery-box",

				gutter: 0,

				transitionDuration: "0.5s",

			});

			

			$("#filters a").on("click",function(){

				$('#filters a').removeClass("active");

				$(this).addClass("active");

				var selector = $(this).attr("data-filter");

				$container.isotope({ filter: selector });		

				return false;

			});

		}

	}

	

	/* + Gallery Masonry */

	function gallery_masonry() {

		if($(".gallery-masonry-list").length) {

			var $container = $(".gallery-masonry-list");

			$container.isotope({

				percentPosition: true,				

				itemSelector: ".gallery-box",

				masonry: {

					columnWidth: '.grid-sizer'

				}

			});

			

			$("#filters a").on("click",function(){

				$('#filters a').removeClass("active");

				$(this).addClass("active");

				var selector = $(this).attr("data-filter");

				$container.isotope({ filter: selector });

				return false;

			});

		}

	}

	

	/* + About Company */

	function about_company_img() {

		var width = $(window).width();

		if ( width >= 768) {

			var content_height = $(".about-company").height();		

			$( ".about-img" ).removeAttr("style");

			$( ".about-img img" ).remove();

			var content_img = $(".about-company .about-img").attr("data-image");

			$( ".about-img" ).css({"background-image":"url('" + content_img + "')","height": content_height});

		} else {

			$( ".about-img" ).removeAttr("style");

			$( ".about-img img" ).remove();

			var content_img = $(".about-company .about-img").attr("data-image");

			$( ".about-img" ).append("<img src='"+ content_img +"' />")

		} 

	}

	

	/* + Counter Style 3 */

	function counter_img() {

		var width = $(window).width();

		if ( width >= 768) {

			var content_height = $(".counter-style-3").height();		

			$( ".counter-img" ).removeAttr("style");

			$( ".counter-img img" ).remove();

			var content_img = $(".counter-img").attr("data-image");

			$( ".counter-img" ).css({"background-image":"url('" + content_img + "')","height": content_height});

		} else {

			$( ".counter-img" ).removeAttr("style");

			$( ".counter-img img" ).remove();

			var content_img = $(".counter-img").attr("data-image");

			$( ".counter-img" ).append("<img src='"+ content_img +"' />")

		} 

	}

	

	/* + Feature Section 2 */

	function feature_img() {

		var width = $(window).width();

		if ( width >= 992) {

			var content_height = $(".feature-section-2").height();		

			$( ".feature-image-2" ).removeAttr("style");

			var feature_img = $(".feature-image-2").attr("data-image");

			$( ".feature-image-2" ).css({"background-image":"url('" + feature_img + "')","height": content_height});

		} else {

			$( ".feature-image-2" ).removeAttr("style");

			var content_height = $(".feature-section-2 .feature-left").height() + 220;

			var feature_img = $(".feature-image-2").attr("data-image");

			$( ".feature-image-2" ).css({"background-image":"url('" + feature_img + "')","height": content_height});

		} 

	}

	

	/* + Google Map* */

	function initialize(obj) {

		var lat = $("#"+obj).attr("data-lat");

        var lng = $("#"+obj).attr("data-lng");

		var contentString = $("#"+obj).attr("data-string");

		var myLatlng = new google.maps.LatLng(lat,lng);

		var map, marker, infowindow;

		var image = "assets/images/pointer.png";

		var zoomLevel = parseInt($("#"+obj).attr("data-zoom") ,10);		

		var styles = [{"featureType": "administrative.province","elementType": "all","stylers": [{"visibility": "off"}]},

					  {"featureType": "landscape","elementType": "all","stylers": [{"saturation": -100},{"lightness": 65},{"visibility": "on"}]},

					  {"featureType": "poi","elementType": "all","stylers": [{"saturation": -100},{"lightness": 51},{"visibility": "simplified"}]},

					  {"featureType": "road.highway","elementType": "all","stylers": [{"saturation": -100},{"visibility": "simplified"}]},

					  {"featureType": "road.arterial","elementType": "all","stylers": [{"saturation": -100},{"lightness": 30},{"visibility": "on"}]},

					  {"featureType": "road.local","elementType": "all","stylers": [{"saturation": -100},{"lightness": 40},{"visibility": "on"}]},

					  {"featureType": "transit","elementType": "all","stylers": [{"saturation": -100},{"visibility": "simplified"}]},

					  {"featureType": "transit","elementType": "geometry.fill","stylers": [{"visibility": "on"}]}, 

					  {"featureType": "water","elementType": "geometry","stylers": [{"hue": "#ffff00"},{"lightness": -25},{"saturation": -97}]},

					  {"featureType": "water","elementType": "labels","stylers": [{"visibility": "on"},{"lightness": -25},{"saturation": -100}]}]

					  

		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	

		

		var mapOptions = {

			zoom: zoomLevel,

			disableDefaultUI: true,

			center: myLatlng,

            scrollwheel: false,

			mapTypeControlOptions: {

            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]

			}

		}

		

		map = new google.maps.Map(document.getElementById(obj), mapOptions);	

		

		map.mapTypes.set("map_style", styledMap);

		map.setMapTypeId("map_style");

		

		if( contentString != "" ) {

			infowindow = new google.maps.InfoWindow({

				content: contentString

			});

		}		

	    

        marker = new google.maps.Marker({

			position: myLatlng,

			map: map,

			icon: image

		});



		google.maps.event.addListener(marker, "click", function() {

			infowindow.open(map,marker);

		});

	}

	

	/* + Responsive Caret* */

	function menu_dropdown_open(){

		var width = $(window).width();

		if($(".ownavigation .nav li.ddl-active").length ) {

			if( width > 991 ) {

				$(".ownavigation .nav > li").removeClass("ddl-active");

				$(".ownavigation .nav li .dropdown-menu").removeAttr("style");

			}

		} else {

			$(".ownavigation .nav li .dropdown-menu").removeAttr("style");

		}

	}

	

	/* + Expand Panel Resize* */

	function panel_resize(){

		var width = $(window).width();

		if( width > 991 ) {

			if($(".header_s #slidepanel").length ) {

				$(".header_s #slidepanel").removeAttr("style");

			}

		}

	}

	

	/* + Sticky Menu* */

	function sticky_menu() {

		var menu_scroll = $("body").offset().top;

		var scroll_top = $(window).scrollTop();

		var height = $(window).height();

		var body_height = $("body").height();

		var header_height = $("header").height();

		var a = body_height + header_height;

		if(a >= height){

			if ( scroll_top > menu_scroll ) {

				$(".header_s").addClass("fixed-top animated fadeInDown");

			} else {

				$(".header_s").removeClass("fixed-top animated fadeInDown"); 

			}

		} else {

			$(".header_s").removeClass("fixed-top animated fadeInDown"); 

		}

	}

	

	/* + Document On Ready */

	$(document).on("ready", function() {



		/* - Scrolling Navigation* */

		var width	=	$(window).width();

		var height	=	$(window).height();

		

		/* - Set Sticky Menu* */

		if( $(".header_s").length ) {

			sticky_menu();

		}

		

		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').on("click", function(e) {

	

			var $anchor = $(this);

			

			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top - 49 }, 1500, "easeInOutExpo");

			

			e.preventDefault();

		});



		/* - Responsive Caret* */

		$(".ddl-switch").on("click", function() {

			var li = $(this).parent();

			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {

				li.removeClass("ddl-active");

				li.children().find(".ddl-active").removeClass("ddl-active");

				li.children(".dropdown-menu").slideUp();

			}

			else {

				li.addClass("ddl-active");

				li.children(".dropdown-menu").slideDown();

			}

		});

		

		/* - Expand Panel* */

		$("#slideit").on ("click", function() {

			$("#slidepanel").slideDown(1000);

			$("html").animate({ scrollTop: 0 }, 1000);

		});	



		/* - Collapse Panel* */

		$("#closeit").on("click", function() {

			$("#slidepanel").slideUp("slow");

			$("html").animate({ scrollTop: 0 }, 1000);

		});	

		

		/* Switch buttons from "Log In | Register" to "Close Panel" on click * */

		$("#toggle a").on("click", function() {

			$("#toggle a").toggle();

		});

		

		panel_resize();

		

		if($(".header_s1").length){

			$('#basic').flagStrap();

		}

		

		/* - Revolution Slider */

		if($("#home-slider-1").length){

			var tpj=jQuery;			

			var revapi6;

			if(tpj("#home-slider-1").revolution == undefined){

				revslider_showDoubleJqueryError("#home-slider-1");

			}else{

				revapi6 = tpj("#home-slider-1").show().revolution({

					sliderType:"standard",

					sliderLayout:"fullwidth",

					dottedOverlay:"none",

					delay:9000,

					navigation: {

						keyboardNavigation:"off",

						keyboard_direction: "horizontal",

						mouseScrollNavigation:"off",

						mouseScrollReverse:"default",

						onHoverStop:"off",

						arrows: {

							style:"hesperiden",

							enable:true,

							hide_onmobile:true,

							hide_under:1200,

							hide_onleave:false,

							tmp:'',

							left: {

								h_align:"left",

								v_align:"center",

								h_offset:60,

								v_offset:-30

							},

							right: {

								h_align:"left",

								v_align:"center",

								h_offset:60,

								v_offset:30

							}

						}

						,

						bullets: {

							enable:true,

							hide_onmobile:false,

							hide_over:1199,

							style:"hesperiden",

							hide_onleave:false,

							direction:"horizontal",

							h_align:"center",

							v_align:"bottom",

							h_offset:0,

							v_offset:20,

							space:10,

							tmp:''

						}

					},

					responsiveLevels:[1920,1200,768,480],

					visibilityLevels:[1920,1200,768,480],

					gridwidth:[1920,1200,768,480],

					gridheight:[820,640,520,400],

					lazyType:"none",

					shadow:0,

					spinner:"spinner0",

					stopLoop:"off",

					stopAfterLoops:-1,

					stopAtSlide:-1,

					shuffle:"off",

					autoHeight:"off",

					disableProgressBar:"on",

					hideThumbsOnMobile:"off",

					hideSliderAtLimit:0,

					hideCaptionAtLimit:0,

					hideAllCaptionAtLilmit:0,

					debugMode:false,

					fallbacks: {

						simplifyAll:"off",

						nextSlideOnWindowFocus:"off",

						disableFocusListener:false,

					}

				});

			}

		}

		

		if($("#home-slider-2").length){

			var tpj=jQuery;

			var revapi7;

			if(tpj("#home-slider-2").revolution == undefined){

				revslider_showDoubleJqueryError("#home-slider-2");

			}else{

				revapi7 = tpj("#home-slider-2").show().revolution({

					sliderType:"standard",

					sliderLayout:"fullwidth",

					dottedOverlay:"none",

					delay:9000,

					navigation: {

						keyboardNavigation:"off",

						keyboard_direction: "horizontal",

						mouseScrollNavigation:"off",

						mouseScrollReverse:"default",

						onHoverStop:"off",

						arrows: {

							style:"hesperiden",

							enable:true,

							hide_onmobile:true,

							hide_under:1200,

							hide_onleave:false,

							tmp:'',

							left: {

								h_align:"left",

								v_align:"center",

								h_offset:60,

								v_offset:0

							},

							right: {

								h_align:"right",

								v_align:"center",

								h_offset:60,

								v_offset:0

							}

						}

						,

						bullets: {

							enable:true,

							hide_onmobile:false,

							hide_over:1199,

							style:"hesperiden",

							hide_onleave:false,

							direction:"horizontal",

							h_align:"center",

							v_align:"bottom",

							h_offset:0,

							v_offset:20,

							space:10,

							tmp:''

						}

					},

					responsiveLevels:[1920,1200,768,480],

					visibilityLevels:[1920,1200,768,480],

					gridwidth:[1920,1200,768,480],

					gridheight:[820,640,520,400],

					lazyType:"none",

					shadow:0,

					spinner:"spinner0",

					stopLoop:"off",

					stopAfterLoops:-1,

					stopAtSlide:-1,

					shuffle:"off",

					autoHeight:"off",

					disableProgressBar:"on",

					hideThumbsOnMobile:"off",

					hideSliderAtLimit:0,

					hideCaptionAtLimit:0,

					hideAllCaptionAtLilmit:0,

					debugMode:false,

					fallbacks: {

						simplifyAll:"off",

						nextSlideOnWindowFocus:"off",

						disableFocusListener:false,

					}

				});

			}

		}

		

		if($("#home-slider-3").length){

			var tpj=jQuery;

			var revapi8;

			if(tpj("#home-slider-3").revolution == undefined){

				revslider_showDoubleJqueryError("#home-slider-3");

			}else{

				revapi8 = tpj("#home-slider-3").show().revolution({

					sliderType:"standard",

					sliderLayout:"fullwidth",

					dottedOverlay:"threexthree",

					delay:9000,

					navigation: {

						keyboardNavigation:"off",

						keyboard_direction: "horizontal",

						mouseScrollNavigation:"off",

						mouseScrollReverse:"default",

						onHoverStop:"off",

						arrows: {

							style:"hesperiden",

							enable:true,

							hide_onmobile:true,

							hide_under:1200,

							hide_onleave:false,

							tmp:'',

							left: {

								h_align:"left",

								v_align:"center",

								h_offset:60,

								v_offset:0

							},

							right: {

								h_align:"right",

								v_align:"center",

								h_offset:60,

								v_offset:0

							}

						}

						,

						bullets: {

							enable:true,

							hide_onmobile:false,

							hide_over:1199,

							style:"hesperiden",

							hide_onleave:false,

							direction:"horizontal",

							h_align:"center",

							v_align:"bottom",

							h_offset:0,

							v_offset:20,

							space:10,

							tmp:''

						}

					},

					responsiveLevels:[1920,1200,768,480],

					visibilityLevels:[1920,1200,768,480],

					gridwidth:[1920,1200,768,480],

					gridheight:[1010,710,580,400],

					lazyType:"none",

					shadow:0,

					spinner:"spinner0",

					stopLoop:"off",

					stopAfterLoops:-1,

					stopAtSlide:-1,

					shuffle:"off",

					autoHeight:"off",

					disableProgressBar:"on",

					hideThumbsOnMobile:"off",

					hideSliderAtLimit:0,

					hideCaptionAtLimit:0,

					hideAllCaptionAtLilmit:0,

					debugMode:false,

					fallbacks: {

						simplifyAll:"off",

						nextSlideOnWindowFocus:"off",

						disableFocusListener:false,

					}

				});

			}

		}

		

		/* - Gallery */

		gallery_masonry();

		gallery();

		if($(".gallery-detail").length){

			var url;

			$(".gallery-detail").magnificPopup({

				delegate: " > a.zoom",

				type: "image",

				tLoading: "Loading image #%curr%...",

				mainClass: "mfp-img-mobile",

				gallery: {

					enabled: true,

					navigateByImgClick: false,

					preload: [0,1] // Will preload 0 - before current, and 1 after the current image

				},

				image: {

					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				

				}

			});

		}

		

		/* - Counter Section */

		$(".counter-section").each(function ()

		{		

			var $this = $(this);

			var myVal = $(this).data("value");	



			$this.appear(function()

			{

				var skill_item_count = 0;

				var skills_count = 0;



				skill_item_count = $( "[id*='count_box-']" ).length;



				for(var i=1; i<=skill_item_count; i++)

				{

					skills_count = $( "[id*='count_box-"+i+"']" ).attr( "data-skills_percent" );

					$("[id*='count_box-"+i+"']").animateNumber({ number: skills_count }, 2000);

				}

			});

		});

		counter_img();

		

		/* - Client Carousel */

		if( $(".client-carousel").length ) {

			$(".client-carousel").owlCarousel({

				loop: true,

				margin: 30,

				nav: false,

				dots: false,

				autoplay: true,

				responsive:{

					0:{

						items: 2

					},

					480:{

						items: 3

					},

					768:{

						items: 4

					},

					992:{

						items: 5

					},

					1200:{

						items: 6

					}

				}

			});

		}

		

		/* - Testimonial Carousel 2 */

		if( $(".testimonial-carousel2").length ) {

			$(".testimonial-carousel2").owlCarousel({

				loop: true,

				margin: 0,

				nav: false,

				dots: true,

				autoplay: true,

				autoplayTimeout:5000,

				autoplayHoverPause:false,

				responsive:{

					0:{

						items: 1

					},

					768:{

						items: 1

					}

				}

			});

		}

		

		/* - Team Carousel */

		if( $(".team-carousel").length ) {

			$(".team-carousel").owlCarousel({

				loop: true,

				margin: 30,

				nav: false,

				dots: true,

				autoplay: true,

				responsive:{

					0:{

						items: 1

					},

					480:{

						items: 2

					},

					768:{

						items: 3

					},

					992:{

						items: 4

					}

				}

			});

		}

		

		/* - About Company Initialize */

		about_company_img();

		

		/* - Feature Section 2 Initialize */

		feature_img();

		

		/* - Contact Map Initialize* */

		if( $( "#contact-map-canvas").length == 1 ){

			initialize( "contact-map-canvas" );

		}

		

		/* - Quick Contact Form* */

		$( "#btn_submit" ).on( "click", function(event) {

			event.preventDefault();

			var mydata = $("form").serialize();

			$.ajax({

				type: "POST",

				dataType: "json",

				url: "contact.php",

				data: mydata,

				success: function(data) {

					if( data["type"] == "error" ){

						$("#alert-msg").html(data["msg"]);

						$("#alert-msg").removeClass("alert-msg-success");

						$("#alert-msg").addClass("alert-msg-failure");

						$("#alert-msg").show();

					} else {

						$("#alert-msg").html(data["msg"]);

						$("#alert-msg").addClass("alert-msg-success");

						$("#alert-msg").removeClass("alert-msg-failure");

						$("#input_name").val("");

						$("#input_phone").val("");

						$("#input_email").val("");

						$("#input_subject").val("");

						$("#textarea_message").val("");

						$("#alert-msg").show();

					}			

				},

				error: function(xhr, textStatus, errorThrown) {

					alert(textStatus);

				}

			});

		});

		

		/* - Coming Soon */ 

		setTimeout(function() {		

			var ele_id = 0;

			$( "[id*='clock-']" ).each(function () { 

				ele_id = $(this).attr('id').split("-")[1];

				var cnt_date = $(this).attr("data-date");

				$("[id*='clock-"+ele_id+"']").countdown(cnt_date, function(event) {

					var $this = $(this).html(event.strftime(''  

						+ '<div class="countdown-box"><p>%m <span>Months</span></p></div>'

						+ '<div class="countdown-box"><p>%D <span>Days</span></p></div>'

						+ '<div class="countdown-box"><p>%H <span>Hours</span></p></div>'

						+ '<div class="countdown-box"><p>%M <span>Minutes</span></p></div>'

					));

				});

			});

		}, 500);

		

		/* - Color Switcher */

		if( $('#choose_color').length ) {



			 $("#default").on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/default.css");

				return false;

			});

			

			$("#green" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/green.css");

				return false;

			});

			

			$("#red").on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/red.css");

				return false;

			});

			

			$("#orange").on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/orange.css");

				return false;

			});

			

			$("#coral" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/coral.css");

				return false;

			});



			$("#cyan" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/cyan.css");

				return false;

			});



			$("#khaki" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/khaki.css");

				return false;

			});



			$("#pink" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/pink.css");

				return false;

			});



			$("#yellow" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/yellow.css");

				return false;

			});



			$("#gold" ).on("click", function() {

				$("#color" ).attr("href","assets/css/color-schemes/gold.css");

				return false;

			});

			

			// picker buttton

			$(".picker_close").on("click", function() {

				$("#choose_view").removeClass("position");

				$("#choose_color").toggleClass("position");

			});

		}

		

		$(".color-switcher-block li a").on("click", function() {

		  $(".color-switcher-block li").removeClass("active");

			$(this).parent().addClass("active");

		});

		

	});	/* - Document On Ready /- */

	

	/* + Window On Scroll */

	$(window).on("scroll",function() {

		/* - Set Sticky Menu* */

		if( $(".header_s").length ) {

			sticky_menu();

		}

	});

	

	/* + Window On Resize */ 

	$( window ).on("resize",function() {

		var width	=	$(window).width();

		var height	=	$(window).height();

		

		sticky_menu();

		

		/* - Expand Panel Resize */

		panel_resize();

		menu_dropdown_open();



		

		/* - About Company Initialize */

		about_company_img();

		counter_img();

		/* - Feature Section 2 */

		feature_img();

	});

	

	/* + Window On Load */

	$(window).on("load",function() {

		/* - Site Loader* */

		if ( !$("html").is(".ie6, .ie7, .ie8") ) {

			$("#site-loader").delay(1000).fadeOut("slow");

		}

		else {

			$("#site-loader").css("display","none");

		}

		

		gallery_masonry();

		gallery();

		counter_img();

		/* - Feature Section 2 */

		feature_img();

	});



})(jQuery);







//jQuery time

var current_fs, next_fs, previous_fs; //fieldsets

var left, opacity, scale; //fieldset properties which we will animate

var animating; //flag to prevent quick multi-click glitches

 

$(".next").click(function(){

 
	if(animating) return false;

	animating = true;

	

	current_fs = $(this).parent();

	next_fs = $(this).parent().next();

	

	//activate next step on progressbar using the index of next_fs

	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	

	//show the next fieldset

	next_fs.show(); 

	//hide the current fieldset with style

	current_fs.animate({opacity: 0}, {

		step: function(now, mx) {

			//as the opacity of current_fs reduces to 0 - stored in "now"

			//1. scale current_fs down to 80%

			scale = 1 - (1 - now) * 0.2;

			//2. bring next_fs from the right(50%)

			left = (now * 50)+"%";

			//3. increase opacity of next_fs to 1 as it moves in

			opacity = 1 - now;

			current_fs.css({

        'transform': 'scale('+scale+')',

        'position': 'absolute'

      });

			next_fs.css({'left': left, 'opacity': opacity});

		}, 

		duration: 800, 

		complete: function(){

			current_fs.hide();

			animating = false;

		}, 

		//this comes from the custom easing plugin

		easing: 'easeInOutBack'

	});

});



$(".previous").click(function(){

	if(animating) return false;

	animating = true;

	

	current_fs = $(this).parent();

	previous_fs = $(this).parent().prev();

	

	//de-activate current step on progressbar

	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	

	//show the previous fieldset

	previous_fs.show(); 

	//hide the current fieldset with style

	current_fs.animate({opacity: 0}, {

		step: function(now, mx) {

			//as the opacity of current_fs reduces to 0 - stored in "now"

			//1. scale previous_fs from 80% to 100%

			scale = 0.8 + (1 - now) * 0.2;

			//2. take current_fs to the right(50%) - from 0%

			left = ((1-now) * 50)+"%";

			//3. increase opacity of previous_fs to 1 as it moves in

			opacity = 1 - now;

			current_fs.css({'left': left});

			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});

		}, 

		duration: 800, 

		complete: function(){

			current_fs.hide();

			animating = false;

		}, 

		//this comes from the custom easing plugin

		easing: 'easeInOutBack'

	});

});



$(".submit").click(function(){

	return false;

})