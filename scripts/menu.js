(function(){

	let elem = document.querySelector('.inf');
	let iso = new Isotope( elem, {
  // options
  itemSelector: '.inf-tshirts',
  filter: '.description'
});

	let classActive = "menu-item-active";
	let menuLinks = document.querySelectorAll('.menu-link');
	menuLinks.forEach(function(menuLink){
		let dataAttribute = menuLink.getAttribute("data-filter");
		menuLink.onclick = function(a){
			menuLinks.forEach(function(link){
				link.closest('.menu-item').classList.remove(classActive);
			})
			a.preventDefault();
			menuLink.closest('.menu-item').classList.add(classActive);

			iso.arrange({
				filter: `.${dataAttribute}`
			})
		}
	})
} ())