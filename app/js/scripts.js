// home_work_js_1

function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

// function getRandomElement() {
// 	let randomNumber = getRandomNumber(lengthAllElements);
// 	return randomNumber;
// }

// function paintRandomColor() {
// 	allElements[getRandomElement()].style.backgroundColor = "rgb(".concat(getRandomNumber(256), ", ", getRandomNumber(256), ", ",getRandomNumber(256), ")");
// }

// function deleteRandomColor() {
// 	allElements[getRandomElement()].style.backgroundColor = null;
// }

// const allElements = document.querySelectorAll('*'),
// 		  lengthAllElements = allElements.length,
// 		  randomElement = allElements[getRandomElement()];

// randomElement.style.backgroundColor = "red";

// setInterval(paintRandomColor, 2000);

// setInterval(deleteRandomColor, 2000);

// home_work_1_end

// home_work_2

document.addEventListener("DOMContentLoaded", function() {

	function createPackage({img, name, date}) {

		let packagesWrap = document.querySelector('.category'),
				package = document.createElement('div'),
				packageImg = document.createElement('div'),
				packageName = document.createElement('a'),
				packageDate = document.createElement('time');

		package.className = 'category__item item-responsive item-4 fade';
		packageImg.className = 'category__img';
		packageName.className = 'category__link';
		packageDate.className = 'category__date';

		package.appendChild(packageImg);
		package.appendChild(packageName);
		package.appendChild(packageDate);
		packagesWrap.appendChild(package);

		packagesWrap.style.maxHeight = '1000px';
		packageImg.style.backgroundImage = 'url(assets/'.concat(img, ')') ;
		packageName.innerHTML = name;
		packageDate.innerHTML = date;

	}


	function checkAddedPackages() {

		let parentPackagesLength = document.querySelector('.category').children.length;

		if (parentPackagesLength > 2) {
			clearInterval(addPackage);
			return false;
		}

	}


	function addRandomPackage() {

		let packageContentLength = packageContent.length,
				randomPackageContent = packageContent[getRandomNumber(packageContentLength)];

		createPackage(randomPackageContent);

		checkAddedPackages();

	}


	let packageContent = [

		{img: 'shot-1.jpg', name: 'Стандартный пакет', date: '08 aпреля 2012'},
		{img: 'shot-2.jpg', name: 'Новый ЦФТ-банк', date: '09 сентября 2016'},
		{img: 'shot-3.jpg', name: 'Каталог разработок', date: '13 января 2015'},
		{img: 'shot-4.jpg', name: 'Автоплатежи', date: '23 марта 2015'},
		{img: 'shot-5.jpg', name: 'Доверительное управление', date: '15 июня 2015'},
		{img: 'shot-6.jpg', name: 'Выплаты АСВ', date: '17 июля 2015'},
		{img: 'shot-7.jpg', name: 'Срочные вклады', date: '26 октября 2015'},
		{img: 'shot-8.jpg', name: 'Пенсионная карта', date: '30 ноября 2015'},
		{img: 'shot-9.jpg', name: 'Оптимальный', date: '04 августа 2015'},
		{img: 'shot-10.jpg', name: 'Премиальный 5', date: '19 мая 2015'},

	]


	let addPackage = setInterval(addRandomPackage, 500);

});

// home_work_2_end


