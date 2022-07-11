$(document).ready(function () {

	const btnInfo = $('.tabs__link');
	const btnInfoActive = 'tabs__link--active';
	const btnDesc = $('#infoDesc');
	const btnTable = $('#infoTabl');
	const btnDeliv = $('#infDeliv');
	const btnBrand = $('#infBrand');
	const infoWrap = $('.info-wrap');

	const infoDesc = $('.info__desc-wrap');
	const infoTables = $('.info__tables-wrap');
	const infoDelivery = $('.info__delivery-wrap');
	const infoBrand = $('.info__brand-wrap');

	const InfoVisible = 'info__visible';

	$(btnInfo).on("click", function(e) {
		e.preventDefault();
		$(btnInfo).removeClass(btnInfoActive);
		$(this).addClass(btnInfoActive);

		if ($(btnDesc).hasClass(btnInfoActive)) {
			$(infoWrap).removeClass(InfoVisible);
			$(infoDesc).addClass(InfoVisible);
		}
		if ($(btnTable).hasClass(btnInfoActive)) {
			$(infoWrap).removeClass(InfoVisible);
			$(infoTables).addClass(InfoVisible);
		}
		if ($(btnDeliv).hasClass(btnInfoActive)) {
			$(infoWrap).removeClass(InfoVisible);
			$(infoDelivery).addClass(InfoVisible);
		}
		if ($(btnBrand).hasClass(btnInfoActive)) {
			$(infoWrap).removeClass(InfoVisible);
			$(infoBrand).addClass(InfoVisible);
		}
	});
});

