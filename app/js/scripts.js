var allElements = document.querySelectorAll('*'),
		lengthAllElements = allElements.length,
		randomElement = allElements[getRandomElement()];

function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function getRandomElement() {
	var randomNumber = getRandomNumber(lengthAllElements);
	return randomNumber;
}

function paintRandomColor() {
	allElements[getRandomElement()].style.backgroundColor = "rgb(" + getRandomNumber(255) + ", " + getRandomNumber(255) + ", " + getRandomNumber(255) + ")";
}

function deleteRandomColor() {
	allElements[getRandomElement()].style.backgroundColor = null;
}

randomElement.style.backgroundColor = "red";

setInterval(paintRandomColor, 2000);

setInterval(deleteRandomColor, 2000);







