// page load animations
$(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  linkElement: 'header a',
  inDuration: 1200,
  outDuration: 500
});


// Sitcky main header
$('.header').sticky({
	topSpacing:0
});

$('.header').on('sticky-start', () => {
	$('.description').html('We build <strong>Great!</strong> apps');
});

$('.header').on('sticky-end', () => {
	$('.description').html('We build apps');
});


// Sticky /work header
$('.work-sticky').sticky({
	topSpacing:60
});

$('.work-sticky').on('sticky-start', () => {
	$('.work-sticky').append("<a href='#' class='sticky-email'> Email Us</a>");
});

$('.work-sticky').on('sticky-end', () => {
	$('.sticky-email').remove();
});
