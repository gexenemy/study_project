
document.addEventListener("DOMContentLoaded", function(event) {
var elements = document.querySelectorAll('*'),
    lengthElements = elements.length;


var randomNumb = function getRandomArbitrary(el) {
  return Math.floor(Math.random() * lengthElements);
};


console.log(randomNumb(lengthElements));


// 	random = Math.floor(Math.random() * 100);

// 	els[random].style.background = "rgb(255, 0, 0)";

// 	setInterval(function function_name() {
// 		els[random].style.background = "red";
// 	}, 2000);


});

