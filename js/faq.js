$(document).ready(function(e) {

var $faq = $('#left-menu');

	$faq.find('a').on('click', function(e){
		e.preventDefault();
		
		var $answer_set = $('#answer-set');
		
		switch($(this).attr('href')) {
			case 'planning.html' :
				$answer_set.load('faq/planning.html');
				break;
			case 'getting-started.html' :
				$answer_set.load('faq/getting-started.html');
				break;
			case 'booking.html' :
				$answer_set.load('faq/booking.html');
				break;
		}
	}); 
});