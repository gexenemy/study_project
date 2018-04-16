import {addData, shuffleArray} from './package.js';
import * as slider from './slider.js';

document.addEventListener("DOMContentLoaded", function () {


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

