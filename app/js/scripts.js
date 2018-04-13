document.addEventListener("DOMContentLoaded", function () {

	function addPackage({
		img,
		name,
		date
	}) {

		const template = document.querySelector('#slider-item'),
				  currentImg = template.content.querySelector('.slider-item__img'),
				  currentName = template.content.querySelector('.slider-item__link'),
				  currentDate = template.content.querySelector('.slider-item__date');

		currentImg.style.backgroundImage = 'url(assets/'.concat(img, ')');
		currentName.innerHTML = name;
		currentDate.innerHTML = date;

		document.querySelector('.sliderBody').appendChild(template.content.cloneNode(true));

	}


	const packageContent = [

		{
			img: 'shot-1.jpg',
			name: 'Стандартный пакет',
			date: '08 aпреля 2012'
		},
		{
			img: 'shot-2.jpg',
			name: 'Новый ЦФТ-банк',
			date: '09 сентября 2016'
		},
		{
			img: 'shot-3.jpg',
			name: 'Каталог разработок',
			date: '13 января 2015'
		},
		{
			img: 'shot-4.jpg',
			name: 'Автоплатежи',
			date: '23 марта 2015'
		},
		{
			img: 'shot-5.jpg',
			name: 'Доверительное управление',
			date: '15 июня 2015'
		},
		{
			img: 'shot-6.jpg',
			name: 'Выплаты АСВ',
			date: '17 июля 2015'
		},
		{
			img: 'shot-7.jpg',
			name: 'Срочные вклады',
			date: '26 октября 2015'
		},
		{
			img: 'shot-8.jpg',
			name: 'Пенсионная карта',
			date: '30 ноября 2015'
		},
		{
			img: 'shot-9.jpg',
			name: 'Оптимальный',
			date: '04 августа 2015'
		},
		{
			img: 'shot-10.jpg',
			name: 'Премиальный 5',
			date: '19 мая 2015'
		},

	]


	function shuffleArray(array) {

		for (let i = array.length - 1; i > 0; i--) {

			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];

		}

	}


	shuffleArray(packageContent);


	packageContent.forEach(function (currentPackage) {
		addPackage(currentPackage);
	});


	function initializeSlider(item, padding) {

		const sliderWidth = document.querySelector('.slider').clientWidth,
					slider = document.querySelector('.sliderBody'),
					slides = slider.querySelectorAll('.slider-item'),
					sliderBodyLength = document.querySelector('.sliderBody').children.length,
					dotsBody = document.querySelector('.slider-dots'),
					dotTemplate = document.querySelector('#slider-dot'),
					dot = dotTemplate.content.querySelector('.slider-dot'),
					buttonsBody = document.querySelector('.slider__buttons'),
					button = document.querySelectorAll('.slider__button'),

					slideWidth = parseInt(((sliderWidth + padding) / item).toFixed(2)),
					sliderBodyWidth = parseInt((slideWidth * sliderBodyLength).toFixed(2)),
					sliderStage = parseInt((slideWidth * 2 - sliderBodyWidth).toFixed(2));


		for (let i = 0; i < slides.length; i++) {

			slides[i].style.width = ''.concat(slideWidth, 'px');
			slides[i].style.paddingRight = ''.concat(padding, 'px');
			dot.dataset.index = ''.concat(i, '');
			dotsBody.appendChild(dotTemplate.content.cloneNode(true));

		}


		dotsBody.children[1].classList.add('slider-dot_active');
		slider.style.width = ''.concat(sliderBodyWidth, 'px');


		const dots = document.querySelectorAll('.slider-dot'),
					dotsBodyLength = dotsBody.children.length;

		let move = 0;


		function dotsFunc(currentDot) {

			const activeDot = document.querySelector('.slider-dot_active');

			let indexDot = parseInt(currentDot.dataset.index);

			move = parseInt((-(slideWidth * (indexDot - 1))).toFixed(2));

			activeDot.classList.remove('slider-dot_active');
			currentDot.classList.add('slider-dot_active');
			slider.style.left = ''.concat(move, 'px');

		}


		function sliderButton(button) {

			const activeDot = document.querySelector('.slider-dot_active');
			activeDot.classList.remove('slider-dot_active');


			if (button.classList.contains('slider__button-left')) {

				move += slideWidth;

				if (activeDot.dataset.index == 0) {

					dots[dotsBodyLength - 1].classList.add('slider-dot_active');

				}
				else {

					activeDot.previousElementSibling.classList.add('slider-dot_active');

				}

			}
			else {

				move -= slideWidth;

				if (activeDot.dataset.index == dotsBodyLength - 1) {

					dots[0].classList.add('slider-dot_active');

				}
				else {

					activeDot.nextElementSibling.classList.add('slider-dot_active');

				}

			}


			if (move > slideWidth) {
				move = sliderStage;
			}
			else if (move < sliderStage) {
				move = slideWidth;
			}


			slider.style.left = ''.concat(move, 'px');


		}


		dotsBody.addEventListener('click', function (event) {
			const target = event.target;
			if (target.className == 'slider-dot') {
				dotsFunc(target);
			}
		});

		buttonsBody.addEventListener('click', function (event) {
			const target = event.target;
			if (event.isTrusted) {
				if (target.classList.contains('slider__button')) {
					sliderButton(target);
				}
			}
		});

	}

	initializeSlider(3, 20);

});