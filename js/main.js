jQuery(function($) {'use strict',

// $('.carousel').carousel({
//     interval: false;
// }); 
	$('#login-btn').click(function(){
    $('#forgotLoginHeader').hide();
    $('#errorLoginHeader').toggle();
    $('#normalLoginHeader').toggle();
  });

  $('.back-to-login').click(function(){
    $('#forgotLoginHeader').hide();
    $('#normalLoginHeader').show();
  });

  $('#login_lost_btn').click(function(){
    $('#errorLoginHeader').hide();
    $('#normalLoginHeader').hide();
    $('#forgotLoginHeader').show();
  });


	// all Parallax Section
	$(window).load(function(){'use strict',
		$("#services").parallax("50%", 0.3);
		$("#clients").parallax("50%", 0.3);
	});
	
	// portfolio filter
	$(window).load(function(){'use strict',
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.col-sm-3',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});
	
	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});

});

// Preloder script
jQuery(window).load(function(){'use strict';
	$(".preloader").delay(1600).fadeOut("slow").remove();
});

//Preloder script
jQuery(window).load(function(){'use strict';

	// Slider Height
	var slideHeight = $(window).height();
	$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);
	});

});


// User define function
function Scroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navbar-collapse').find('.scroll a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop ){
			$('.navbar-collapse li.scroll')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})

};


	// Skill bar Function

	jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
		
	
    $('#login_lost_btn').click(function() {
      $('#lost-form').css("display","block");
      $('#register-form').css("display","none");
      $('#login-form').css("display","none");
      $("#div-forms").load("lost-form");
    });

    $('#login_register_btn').click(function() {
      $('#lost-form').css("display","none");
      $('#register-form').css("display","block");
      $('#login-form').css("display","none");
       $("#div-forms").load("register-form");
    });

    $('#lost_login_btn').click(function() {
	    $('#lost-form').css("display","none");
      $('#register-form').css("display","none");
      $('#login-form').css("display","block");
       $("#div-forms").load("login-form");
    });
	
   $('#lost_register_btn').click(function() {
	    $('#lost-form').css("display","none");
      $('#register-form').css("display","block");
      $('#login-form').css("display","none");
       $("#div-forms").load("register-form");
    });
  
  $('#register_login_btn').click(function() {
	    $('#lost-form').css("display","none");
      $('#register-form').css("display","none");
      $('#login-form').css("display","block");
       $("#div-forms").load("login-form");
    });
$('#register_lost_btn').click(function() {
	    $('#lost-form').css("display","block");
      $('#register-form').css("display","none");
      $('#login-form').css("display","none");
       $("#div-forms").load("lost-form");
    });
   
		

	
});


