import {Menu, Basket} from './package.js';

document.addEventListener("DOMContentLoaded", function () {

	const leftMenu = new Menu();

	const basketPage = new Basket()
	basketPage.currentSum();

});
