// import {Buy} from './package.js';

document.addEventListener("DOMContentLoaded", function () {

	class Buy{

		constructor() {
			this.link = document.querySelector('.order__button');
			this.form = document.querySelector('.card-form');
			this.direct(this.link, this.form);
		}

		direct(link, form) {
			link.addEventListener('click', function(event){
				event.preventDefault();
				form.classList.add('card-form_blur');
				setTimeout(() => {
					location.href = link.href
				}, 4000);
			});
		}
	}

	const buy = new Buy()

});
