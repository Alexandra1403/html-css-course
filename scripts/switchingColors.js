$(document).ready ( () => {
	const colorBtn = $('.product-color__item');
	const colorBtnActive = 'product-color__item--active';

	$(colorBtn).on("click", function() {
		$(colorBtn).removeClass(colorBtnActive);
		$(this).addClass(colorBtnActive);
	});

	const black = $('.black');
	const white = $('.white');
	const green = $('.green');
	const blue = $('.blue');
	const red = $('.red');

	$(colorBtn).on('click', function() {
		if ( $(black).hasClass(colorBtnActive) ) {
			$('.product__img').attr('src','./img/web-ready/tshirts/tshirt_07.png');
		}
		if ( $(white).hasClass(colorBtnActive) ) {
			$('.product__img').attr('src','./img/web-ready/tshirts/tshirt_08.png');
		}
		if ( $(green).hasClass(colorBtnActive) ) {
			$('.product__img').attr('src','./img/web-ready/tshirts/tshirt_09.png');
		}
		if ( $(blue).hasClass(colorBtnActive) ) {
			$('.product__img').attr('src','./img/web-ready/tshirts/tshirt_10.png');
		}
		if ( $(red).hasClass(colorBtnActive) ) {
			$('.product__img').attr('src','./img/web-ready/tshirts/tshirt_11.png');
		}
	});
});
