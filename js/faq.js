var $faq = $("#left-menu");

$faq.find('a').on('click', function(e){
	e.preventDefault();
	
	var $answerSet = $('#answer-set');
	
	switch($(this).attr('href')) {
		case 'planning.html' :
			$answerSet.load('faq/planning.html');
			break;
		case 'getting-started.html' :
			$answerSet.load('faq/getting-started.html');
			break;
		case 'booking.html' :
			$answerSet.load('faq/booking.html');
			break;
	}
}); 