$(document).ready(function () {
	$('#burgerBtn').click(function () {
		$(this).toggleClass('open');

		if ($('#burgerBtn').hasClass('open')) {
			$('.headerNavMobile').css('top', '0');
			$('.headerNavMobile').css('opacity', '1');

			$('body').css('overflow', 'hidden');
			
		}
		else {
			$('.headerNavMobile').css('top', '-100%');
			$('.headerNavMobile').css('opacity', '0');

			$('body').css('overflow', 'unset');
		}
	});
});