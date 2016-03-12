$(document).ready(function(){
	$('nav a').on('click', function(){
		// Current class assignment 
		$('nav li.current').removeClass('current'); 
		$(this).parent().addClass('current'); 

		// Set heading text
		$('h1.heading').text($(this).text()); 
	}); 
}); 