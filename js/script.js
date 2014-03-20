document.createElement("section");

$(document).ready(function(){
	$window = $(window);

	// paralax scrolling
	$('section[data-type="background"]').each(function () {
		var bgobj = $(this);
		var basePos = '50% ' + bgobj.data('offset') + 'px';
		bgobj.css({ backgroundPosition:  basePos});
		$window.scroll(function () {
			$('section[data-type="background"]').each(function () {
				var bgobj = $(this);
				var yPos = -( $window.scrollTop() / bgobj.data('speed') ) + bgobj.data('offset');
				var coords = '50% ' + yPos + 'px';
				bgobj.css({ backgroundPosition: coords });
			});
		});
	});

	// navbar links
	var navbarElements = $('.nav').find('li');

	function activateNavbarElement (element, navbarElements) {
		navbarElements.removeClass('active');
		if(element) {
			element.addClass('active');
		}
	}

	navbarElements.bind('click', function () {
		activateNavbarElement( $(this), navbarElements );
	});

	$('.brand').bind('click', function () {
		activateNavbarElement( null, navbarElements );
	});

	// set hash while scrolling
	$window.bind('scroll',function(e){
		$('section').each(function(){
			if ( $(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10 ) {
				var sectionId = $(this).attr('id');
				if (sectionId == 'intro') {
					activateNavbarElement( null, navbarElements );
				} else {
					activateNavbarElement( $( '#link-' + sectionId), navbarElements );
				}
			}
		});
	});
});