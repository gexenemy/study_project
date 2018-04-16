export function initializeSlider(item, padding) {

		const sliderWidth = document.querySelector('.slider').clientWidth,
					slider = document.querySelector('.slider__body'),
					slides = slider.querySelectorAll('.slider-item'),
					sliderBodyLength = document.querySelector('.slider__body').children.length,
					dotsBody = document.querySelector('.slider__dots'),
					dotTemplate = document.querySelector('#slider-dot'),
					dot = dotTemplate.content.querySelector('.slider__dot'),
					buttonsBody = document.querySelector('.slider__buttons'),
					button = document.querySelectorAll('.slider__button'),

					slideWidth = parseInt(((sliderWidth + padding) / item).toFixed(2)),
					sliderBodyWidth = parseInt((slideWidth * sliderBodyLength).toFixed(2)),
					sliderStage = parseInt((slideWidth * 2 - sliderBodyWidth).toFixed(2));

		let move = 0;


		for (let i = 0; i < slides.length; i++) {

			slides[i].style.width = ''.concat(slideWidth, 'px');
			slides[i].style.paddingRight = ''.concat(padding, 'px');
			dot.dataset.index = ''.concat(i, '');
			dotsBody.appendChild(dotTemplate.content.cloneNode(true));

		}


		dotsBody.children[1].classList.add('slider__dot_active');
		slider.style.width = ''.concat(sliderBodyWidth, 'px');


		const dots = document.querySelectorAll('.slider__dot'),
					dotsBodyLength = dotsBody.children.length;


		function dotsFunc(currentDot) {

			const activeDot = document.querySelector('.slider__dot_active');

			let indexDot = parseInt(currentDot.dataset.index);

			move = parseInt((-(slideWidth * (indexDot - 1))).toFixed(2));

			activeDot.classList.remove('slider__dot_active');
			currentDot.classList.add('slider__dot_active');
			slider.style.left = ''.concat(move, 'px');

		}


		function sliderButton(button) {

			const activeDot = document.querySelector('.slider__dot_active');
			activeDot.classList.remove('slider__dot_active');


			if (button.classList.contains('slider__button-left')) {

				move += slideWidth;

				if (activeDot.dataset.index == 0) {

					dots[dotsBodyLength - 1].classList.add('slider__dot_active');

				} else {

					activeDot.previousElementSibling.classList.add('slider__dot_active');

				}

			}
			else {

				move -= slideWidth;

				if (activeDot.dataset.index == dotsBodyLength - 1) {

					dots[0].classList.add('slider__dot_active');

				}
				else {

					activeDot.nextElementSibling.classList.add('slider__dot_active');

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
			if (target.className == 'slider__dot') {
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