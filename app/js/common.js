$(function() {

	$('.menu-toggle').on('click', function() {

		$('.menu ul').slideToggle(300, function() {

			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');

			}

		});

	});


});