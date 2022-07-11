(function(){

	let elem = document.querySelector('.size-choise');

	let classActive = "size-choise-active";
	let sizeElements = document.querySelectorAll('.size');
	sizeElements.forEach(function(sizeElements){
		let dataAttribute = sizeElements.getAttribute("data-size");
		sizeElements.onclick = function(a){
			sizeElements.forEach(function(link){
				link.closest('.size').classList.remove(classActive);
			})
			a.preventDefault();
			sizeElements.closest('.size').classList.add(classActive);

		}
	})
} ())