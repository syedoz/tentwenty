$( document ).ready(function() {
	var slidr = $('.banner-slider');
	slidr.owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    items: 1
	})
	$('#res').click(function(){
		slidr.trigger('owl.goTo', 2)
		//alert('yehla')
	});

	var wrapperMenu = document.querySelector('.wrapper-menu');

	wrapperMenu.addEventListener('click', function(){
	  wrapperMenu.classList.toggle('open');
	  if($(this).hasClass('open')){
	  	$('.navItems').stop().animate({
			left:'0px'
		})	
	  }
	  else {
	  	$('.navItems').stop().animate({
			left:'-999px'
		})
	  }
	})
});
