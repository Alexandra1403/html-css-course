$(document).ready ( () => {
	$('.product-size__item--active').on("click", function() {
		$('.product-size__item--active').removeClass('product-size__item--choice');
		$(this).addClass('product-size__item--choice');
	});
});
