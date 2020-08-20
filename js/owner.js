(function($){
	'use strict'
	$('.menu-icon i').click(function(){
		$('.sidebar').animate({
			'left' : 0
		});
	});
	$('.close-icon i').click(function(){
		$('.sidebar').animate({
			'left' : -250
		});
	});

	$(window).scroll(function(){
		var topBtn = $(window).scrollTop();

		if(topBtn > 550) {
			$('.top').fadeIn();
		} 
		else{
			$('.top').fadeOut();
		}
	});
	$('.top').on('click', function(){
		$('html').animate({'scrollTop' : 0}, 1000)
	});

//owl carousal plugin
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//ISOTOP plugins
	// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		var $grid = $('.grid').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		    // use element for option
		    columnWidth: '.grid-item'
		  }
		})

	$('.all-product button').on('click',function(){
		$('.all-product button').removeClass('current');
		$(this).addClass('current');
	})










})(jQuery);