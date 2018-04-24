import {BasketPage} from './package.js';

document.addEventListener("DOMContentLoaded", function () {

	const basketPage = new BasketPage()


	function applyForVisa(documents) {
		console.log('Обработка заявления...');
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				Math.random() > 0 ? resolve({}) : reject('В визе отказано: нехватка документов');
			}, 2000);
		});
		return promise;
	}

	function getVisa(visa) {
		console.info('Виза получена');
		return new Promise(function(resolve, reject){
			setTimeout(() => resolve(visa), 2000)
		});
	}

	function bookHotel(visa) {
		console.log(visa)
		console.log('Бронируем отель')
		return Promise.resolve(visa);
	}

	function buyTickets(booking) {
		console.log('Покупаем билеты')
		console.log('Бронь', booking)
	}

	applyForVisa({})
		.then(getVisa)
		.then(bookHotel)
		.then(buyTickets)
		.catch(error => console.error(error));

});