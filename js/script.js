$(document).ready(function() {
  $('.menu_trigger').click(function() {
    $('nav').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 767 ) {			
			$('nav').removeAttr('style');
		 }
	});//end resize
});//end ready