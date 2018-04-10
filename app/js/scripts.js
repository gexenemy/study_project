// dz_js_1

// function getRandomNumber(upperLimit) {
//   return Math.floor(Math.random() * upperLimit);
// }

// function getRandomElement() {
// 	let randomNumber = getRandomNumber(lengthAllElements);
// 	return randomNumber;
// }

// function paintRandomColor() {
// 	allElements[getRandomElement()].style.backgroundColor = "rgb(" + getRandomNumber(255) + ", " + getRandomNumber(255) + ", " + getRandomNumber(255) + ")";
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

// dz_js_1_end

// dz_js_2

var elementPackageWrap = document.querySelector('.category'),
		elementPackage = document.createElement('div'),
	  elementPackageImg = document.createElement('div'),
		elementPackageLink = document.createElement('a'),
		elementPackageDate = document.createElement('time');

elementPackage.appendChild(elementPackageImg);
elementPackage.appendChild(elementPackageLink);
elementPackage.appendChild(elementPackageDate);
elementPackageWrap.appendChild(elementPackage);

elementPackage.className = 'category__item item-responsive item-4';
elementPackageImg.className = 'category__img';
elementPackageLink.className = 'category__link';
elementPackageDate.className = 'category__date';

elementPackageImg.style.backgroundImg = 'url(assets/' + this.img + ')';
elementPackageLink.innerHTML = this.link;
elementPackageDate.innerHTML = this.date;

function Obj(img, link, date) {
	this.img = img;
	this.link = link;
	this.date = date;
}

var elem1 = new Obj();
var elem2 = new Obj();
var elem3 = new Obj();

function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

var arr = {
	 	elem1: ('shot-1.jpg', 'СТАНДАРТНЫЙ ПАКЕТ', '08 aпреля 2012'),
		elem2: ('shot-2.jpg', 'НОВЫЙ ЦФТ-БАНК', '09 сентября 2016'),
		elem3: ('shot-3.jpg', 'КАТАЛОГ РАЗРАБОТОК', '03 марта 2015'),
}
console.log(arr.elem1);

function getRandomElements() {
	var arrLength = arr.length;
	var xx = arr[getRandomNumber(arrLength),getRandomNumber(arrLength),getRandomNumber(arrLength)];

}

setInterval(getRandomElements, 2000);


