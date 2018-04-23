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


export function activeLink() {
				const hrefGET = splitGETString(),
				linkActive = document.querySelector('a[data-id="'.concat(((hrefGET.id) ? hrefGET.id : 1), '"]'));
				linkActive.classList.add('left-menu__link_active');
			}

export function addDesciption(id, title, config, lastUpdate, requirement, guid, functions, price) {
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
				funcsDescr = document.querySelector('.functions-list'),
				priceDescr = document.querySelector('.description__price-cost');


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
	priceDescr.innerHTML = price;
}


export function splitGETString() {

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


export class Menu {

	constructor() {
		this.template = document.querySelector('#left-menu__item');
		this.link = this.template.content.querySelector('.left-menu__link');
		this.list = document.querySelector('.left-menu__list');
		this.createItems()
	}

	createItems() {
		const link = this.link,
		list = this.list,
		template = this.template;

		const xhr = new XMLHttpRequest();
		xhr.open("GET", '../api/app_packages.json', true);
		xhr.send();
		xhr.onload = () => this.init(xhr, link, list, template);
	}

	init(xhr, link, list, template) {
		const jsonPage = JSON.parse(xhr.responseText);
		jsonPage.forEach(function(cur) {
			link.innerHTML = cur.title;
			link.dataset.id = cur.id;
			list.appendChild(template.content.cloneNode(true));
		});
		activeLink();
		this.switchMenuItem(list);
		const app = new AppDesciption();
	}


	switchMenuItem(list) {
		list.addEventListener('click', function(event) {

			const switchLink = new SwitchLink();
			const changeDescr = new DisplayDescr();
		});
	}
}


export class SwitchLink {
	constructor() {
		this.activeLink = document.querySelector('.left-menu__link_active');
		this.activateLink();
	}

	activateLink(target) {

		this.target = event.target
		if (this.target.className === 'left-menu__link') {
			event.preventDefault();
			this.activeLink.classList.remove('left-menu__link_active');
			this.target.classList.add('left-menu__link_active');
		}
	}
}


export class AppDesciption {

	constructor() {
		this.hrefGET = splitGETString();
		this.addPageDesciption();
	}

	addPageDesciption() {
		const xhrPage = new XMLHttpRequest(),
					pars = new ParseDescr(xhrPage);

		const promise = new Promise((resolve, reject) => {
			xhrPage.open("GET", '../api/app_package'.concat(((this.hrefGET.id) ? this.hrefGET.id : 1), '.json'), true);
			xhrPage.send();

			xhrPage.onload = () => pars.parsePackage(resolve);

		});
		// return promise
	}

}

export class DisplayDescr {
	constructor() {
		this.descrLoad()
	}

	descrLoad(target) {
		const xhr1 = new XMLHttpRequest();
		this.target = event.target;

		if (this.target.classList.contains('left-menu__link')) {
			const linkId = this.target.dataset.id,
						pars1 = new ParseDescr(xhr1);
			xhr1.open("GET", '../api/app_package'.concat(linkId, '.json'), true);
			xhr1.send();

			xhr1.onload = () => pars1.parsePackage(xhr1);
		}

	}

}


class ParseDescr {
	constructor(xhr) {
		this.xhr = xhr;
	}

	parsePackage(resolve) {
		const jsonPage = JSON.parse(this.xhr.responseText);
		jsonPage.forEach(function (cur) {
			addDesciption(
				cur.id,
				cur.title,
				cur.config,
				cur.lastUpdate,
				cur.requirement,
				cur.guid,
				cur.functions,
				cur.price
				);
		});
		const basket = new Basket();
		basket.clicker(jsonPage)
	}
}


export class Basket {
	constructor() {
		this.elem = document.querySelector('.description__button');
		this.basket = document.querySelector('.basket__sum-total');
		this.count = document.querySelector('.basket__app-total');
	}

	clicker(json) {
		let basket = this.basket,
				count = this.count;

		this.elem.onclick = function(event) {
			event.preventDefault();

			let basketTotal = parseFloat(basket.innerHTML),
					countTotal = parseInt(count.innerHTML),
					serialObj = JSON.stringify(json[0]),
					i = localStorage.getItem(serialObj) || 0;

			localStorage.setItem(serialObj, ++i);
			basket.innerHTML = (basketTotal + json[0].price).toFixed(2);
			count.innerHTML = ++countTotal;
		}
	}
	currentSum() {
		let basket = this.basket,
				count = this.count;

		for (let i = 0; i < localStorage.length; i++) {
			let basketTotal = parseFloat(basket.innerHTML),
					countTotal = parseInt(count.innerHTML),
					key = localStorage.key(i);
			basket.innerHTML = (basketTotal + JSON.parse(key).price * parseInt(localStorage.getItem(key))).toFixed(2);
			console.log(countTotal)
			console.log(localStorage.getItem(key))
			count.innerHTML = countTotal + parseInt(localStorage.getItem(key));
		}
	}

}



export class BasketPage {
	constructor() {
		this.table = document.querySelector('.table-order__body');
		this.template = document.querySelector('#basket-item');
		this.img = this.template.content.querySelector('.table-order__img');
		this.title = this.template.content.querySelector('.table-order__title');
		this.price = this.template.content.querySelector('.table-order__price');
		this.value = this.template.content.querySelector('.counter__input');
		this.total = this.template.content.querySelector('.table-order__cost');
		this.delButton = this.template.content.querySelector('.table-order__delete');
		this.allSum = document.querySelector('.table-order__total-cost');
		this.parseItem(this.table, this.template, this.img, this.title, this.price, this.value, this.total, this.delButton, this.allSum);
		this.delItem(this.parseItem, this.table, this.template, this.img, this.title, this.price, this.value, this.total, this.delButton, this.allSum);
		this.countItem(this.parseItem, this.table, this.template, this.img, this.title, this.price, this.value, this.total, this.delButton, this.allSum);
	}

	parseItem(table, template, img, title, price, value, total, delButton, allSum) {
		let sum = 0;
		for (var i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i),
					item = JSON.parse(key);

				title.innerHTML = item.title;
				img.style.backgroundImage = 'url(assets/'.concat(item.guid, '.jpg)');
				price.innerHTML = '$'.concat(item.price);
				value.value = localStorage.getItem(key);
				value.dataset.key = localStorage.key(i);
				total.innerHTML = '$'.concat((item.price * parseFloat(localStorage.getItem(key))).toFixed(2));
				delButton.dataset.key = localStorage.key(i);
				table.appendChild(template.content.cloneNode(true));
				sum += item.price * parseFloat(localStorage.getItem(key));

		}
		allSum.innerHTML = '$'.concat(sum.toFixed(2));
	}

	delItem(parseItem, table, template, img, title, price, value, total, delButton, allSum) {

		table.addEventListener('click', function(event) {
			this.target = event.target;
			if (this.target.className === 'table-order__delete') {

				let delId = this.target.dataset.key;
				localStorage.removeItem(delId);

				while (table.firstChild) {
					table.removeChild(table.firstChild);
				}
				parseItem(table, template, img, title, price, value, total, delButton, allSum);
			}
		});
	}

	countItem(parseItem, table, template, img, title, price, value, total, delButton, allSum) {
		table.addEventListener('click', function(event) {
			this.target = event.target;
			if (this.target.classList.contains('counter__switch-left')) {
				if (this.target.nextElementSibling.value === '1') {
					return false;
				}
				let key = this.target.nextElementSibling.dataset.key;
				localStorage.setItem(key, (parseInt(localStorage.getItem(key)) - 1));
				while (table.firstChild) {
					table.removeChild(table.firstChild);
				}
				parseItem(table, template, img, title, price, value, total, delButton, allSum);
			} else if(this.target.classList.contains('counter__switch-right')) {

				let key = this.target.previousElementSibling.dataset.key;
				localStorage.setItem(key, (parseInt(localStorage.getItem(key)) + 1));
				while (table.firstChild) {
					table.removeChild(table.firstChild);
				}
				parseItem(table, template, img, title, price, value, total, delButton, allSum);
			}
		});


	}
}