$('#open_menu').on('click', function(e) {
	$('.side-menu-bg').addClass('side-menu-open');
	e.stopPropagation();
});
$('#close_menu').on('click', function() {
	$('.side-menu-bg').removeClass('side-menu-open');
});
$('html').not($('.side-menu')).on('click', function(e) {
	if (e.target.classList.contains('side-menu')) return;
	$('.side-menu-bg').removeClass('side-menu-open');
});