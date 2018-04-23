import {addData, shuffleArray, Basket, BasketPage} from './package.js';
import * as slider from './slider.js';

document.addEventListener("DOMContentLoaded", function () {

	const basket = new Basket()
		basket.currentSum();



	const xhr = new XMLHttpRequest();
	xhr.open("GET", '../api/app_packages.json', true);
	xhr.send();

	xhr.onload = function(e) {

		const jsonParse = JSON.parse(xhr.responseText);

		shuffleArray(jsonParse);

		addData(jsonParse);

		slider.initializeSlider(3, 20);

	};




});



			// *

			// class ClickBtn2 extends ClickBtn {
			// 	constructor(s, target) {
			// 		super(s);
			// 		this.target = target;

			// 	}

			// 	on(event, callbac) {
			// 		console.log(this.target);
			// 		// console.log(target);
			// 		this.elem.addEventListener(event, callbac);

			// 	callbac() {
			// 		// if (this.target.className === this.target) {
			// 			console.log('asdasd');
			// 		// }
			// 	}


			// 	}
			// }

			// const qwe = new ClickBtn2('.left-menu__list', 'left-menu__link')


			// qwe.on('click', function() {
			// 	console.log('1234');
			// })
			// class Animal {
			// 	constructor(name) {
			// 		this.name = name;
			// 	}

			// 	speak(aaa) {
			// 		console.log(this.name + ' издает звук.' + aaa);
			// 	}
			// }

			// class Dog extends Animal {
			// 	constructor(a, surname) {
			// 		super(a);
			// 		this.surname = surname;
			// 	}
			// 	speak(bbb) {
			// 		super.speak(bbb);
			// 		console.log(this.name + this.surname + ' лает.');

			// 	}
			// }

			// var d = new Dog('hbnwb', 'Митци');
			// d.speak('acs');
			// *
