import {createMenu, addDesciption, addPageDesciption, activeLink} from './package.js';

	document.addEventListener("DOMContentLoaded", function () {

		addPageDesciption();


		const xhr = new XMLHttpRequest();
		xhr.open("GET", '../api/app_packages.json', true);
		xhr.send();

		xhr.onload = function(e) {

			const jsonMenu = JSON.parse(xhr.responseText);

			jsonMenu.forEach(function (current) {
				createMenu(current.id, current.title);
			});
			activeLink()

			const link = document.querySelector('.left-menu__list');

			const xhr1 = new XMLHttpRequest();


			link.addEventListener('click', function (event) {
				const target = event.target;

				if (target.className == 'left-menu__link') {
					event.preventDefault();
					const href1 = target.dataset.id,
								activeLink = document.querySelector('.left-menu__link_active');

					activeLink.classList.remove('left-menu__link_active');
					target.classList.add('left-menu__link_active');

					xhr1.open("GET", '../api/app_package'.concat(href1, '.json'), true);
					xhr1.send();

					xhr1.onload = function(e) {

						const jsonParse1 = JSON.parse(xhr1.responseText);

						console.log(jsonParse1)

						jsonParse1.forEach(function (cur) {
							addDesciption(
								cur.id,
								cur.title,
								cur.config,
								cur.lastUpdate,
								cur.requirement,
								cur.guid,
								cur.functions
								);
						});

					}

				}

			});

		};



	});
