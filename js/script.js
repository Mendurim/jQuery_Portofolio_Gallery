$(document).ready(function(){
	$('nav a').on('click', function(){
		// Current class assignment 
		$('nav li.current').removeClass('current'); 
		$(this).parent().addClass('current'); 

		// Set heading text
		$('#heading').text($(this).text()); 

		// Get & filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-'); 

		// Remove hidden class if 'all projects' is selected
		if(category== 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden'); 
		} else{
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden'); 
				}else {
					$(this).fadeIn('slow').removeClass('hidden'); 
				}
			}); 
		}
		// Stop link behaviour
		return false; 

	});

	$('ul#gallery li').on('mouseenter', function(){
		// Get data attribute values
		var title = $(this).children().data('title'); 
		var desc = $(this).children().data('desc');
		// Validation
		if(desc==null){
			desc= 'Click to enlarge';
		}

		if(title == null){
			title = ''; 
		} 

		// Create overlay div 
		$(this).append('<div class="overlay"></div>'); 
		// Get the overlay div
		var overlay = $(this).children('.overlay'); 

		// Add html to overlay 
		overlay.html('<h3>' + title+ '</h3><p>' + desc + '</p>'); 

		// Fade in the overlay
		overlay.fadeIn(800); 

	}); 

	$('ul#gallery li').on('mouseleave', function(){
		// Create overlay div 
		$(this).append('<div class="overlay"></div>'); 
		// Get the overlay div
		var overlay = $(this).children('.overlay'); 
		// Fade out
		overlay.fadeOut(500); 
	});
}); 