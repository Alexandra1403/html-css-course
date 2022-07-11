(function(){

	let elem = document.querySelector('.products__list');
	let iso = new Isotope( elem, {
  // options
  itemSelector: '.products__item',
  filter: '.popular'
});

	let classActive = "filter__item--active";
	let filterLinks = document.querySelectorAll('.filter__link');
	filterLinks.forEach(function(filterLink){
		let dataAttribute = filterLink.getAttribute("data-filter");
		filterLink.onclick = function(a){
			filterLinks.forEach(function(link){
				link.closest('.filter__item').classList.remove(classActive);
			})
			a.preventDefault();
			filterLink.closest('.filter__item').classList.add(classActive);

			iso.arrange({
				filter: `.${dataAttribute}`
			})
		}
	})
} ())