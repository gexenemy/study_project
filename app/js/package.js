export function addPackage(id, title, lastUpdate, guid) {

	const template = document.querySelector('#slider-item'),
				img = template.content.querySelector('.slider-item__img'),
				name = template.content.querySelector('.slider-item__link'),
				date = template.content.querySelector('.slider-item__date');


	img.style.backgroundImage = 'url(assets/'.concat(guid, '.jpg)');
	name.innerHTML = title;
	name.href = 'product.html?id='.concat(id);
	date.innerHTML = trasformDate(lastUpdate);

	document.querySelector('.slider__body').appendChild(template.content.cloneNode(true));

}


export function shuffleArray(array) {

	for (let i = array.length - 1; i > 0; i--) {

		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];

	}

}


export function addData(data) {

	data.forEach(function (current) {
		addPackage(current.id, current.title, current.lastUpdate, current.guid);
	});

}


function trasformDate(date) {

	const time = new Date(date),
				UTCstring = time.toUTCString(),
				options = { year: 'numeric', month: 'long', day: 'numeric' };

	return time.toLocaleString('ru-RU', options);

}


export function createMenu(id, title) {
	const template = document.querySelector('#left-menu__item'),
				link = template.content.querySelector('.left-menu__link');

	link.innerHTML = title;
	link.dataset.id = id;

	document.querySelector('.left-menu__list').appendChild(template.content.cloneNode(true));

}

export function activeLink() {
	const hrefGET = splitGETString(),
	linkActive = document.querySelector('a[data-id="'.concat(hrefGET.id, '"]'));
	linkActive.classList.add('left-menu__link_active');
}

export function addDesciption(id, title, config, lastUpdate, requirement, guid, functions) {
	const titleDescr = document.querySelector('.title-h1'),
				dateDescr = document.querySelector('.description__date'),
				appListDescr = document.querySelector('.description__list'),
				templateListItem = document.querySelector('#description__list-item'),
				linkActive = document.querySelector('.left-menu__link_active'),
				linkCurrent = document.querySelector('.left-menu__link'),
				listItemDescr = templateListItem.content.querySelector('.description__list-item'),
				temlateFunc = document.querySelector('#functions-list__item'),
				funcDescr = temlateFunc.content.querySelector('.functions-list__item'),
				requirementDescr = document.querySelector('.description__requirement'),
				imgDescr = document.querySelector('.description__img'),
				funcsDescr = document.querySelector('.functions-list');



	if (appListDescr.children.length > 0) {
		while (appListDescr.firstChild) {
			appListDescr.removeChild(appListDescr.firstChild);
		}
	}

	if (funcsDescr.children.length > 0) {
		while (funcsDescr.firstChild) {
			funcsDescr.removeChild(funcsDescr.firstChild);
		}
	}

	config.forEach(function (current) {
		listItemDescr.innerHTML = current;
		appListDescr.appendChild(templateListItem.content.cloneNode(true));
	});

	functions.forEach(function (current) {
		funcDescr.innerHTML = current;
		funcsDescr.appendChild(temlateFunc.content.cloneNode(true));
	});


	titleDescr.innerHTML = title;
	listItemDescr.innerHTML = config;
	dateDescr.innerHTML = trasformDate(lastUpdate);
	requirementDescr.innerHTML = requirement;
	imgDescr.style.backgroundImage = 'url(assets/'.concat(guid, '.jpg)');

}

function splitGETString() {

	const strGET = window.location.search.replace( '?', '').split('&').reduce(
		function(p,e){
			var a = e.split('=');
			p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			return p;
		},
		{}
		);

	return strGET

}

export function addPageDesciption() {

	const hrefGET = splitGETString(),
				xhr2 = new XMLHttpRequest();


	xhr2.open("GET", '../api/app_package'.concat(hrefGET.id, '.json'), true);
	xhr2.send();

	xhr2.onload = function(e) {

		const jsonPageDesciption = JSON.parse(xhr2.responseText);

		jsonPageDesciption.forEach(function (cur) {
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