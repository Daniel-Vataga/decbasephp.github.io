const burger = document.getElementById('burgerBtn');
const headerNavMobile = document.querySelector('.headerNavMobile');

burger.addEventListener('click', () => {
	burger.classList.toggle('open');

	if (burger.classList.contains('open')) {
		headerNavMobile.style.top = '0';
		headerNavMobile.style.opacity = '1';
		document.body.style.overflow = 'hidden';
	} else {
		headerNavMobile.style.top = '-100%';
		headerNavMobile.style.opacity = '0';
		document.body.style.overflow = 'unset';
	}
})

const leftArrow = document.querySelector('.leftArrowBtn');
const rightArrow = document.querySelector('.rightArrowBtn');
const firstSlide = document.querySelectorAll('.firstSlide');
const secondSlide = document.querySelectorAll('.secondSlide');

rightArrow.addEventListener('click', () => {
	rightArrow.setAttribute('disabled', 'disabled');
	leftArrow.removeAttribute('disabled');

	for (let i = 0; i < firstSlide.length; i++) {
		firstSlide[i].style.opacity = '0'

		setTimeout(() => {
			firstSlide[i].style.display = 'none'
			for (let s = 0; s < secondSlide.length; s++) {
				secondSlide[s].style.display = 'flex'
				setTimeout(() => {
					secondSlide[s].style.opacity = '1'
				}, 10)
			}
		}, 300)


	}
})

leftArrow.addEventListener('click', () => {
	leftArrow.setAttribute('disabled', 'disabled');
	rightArrow.removeAttribute('disabled');
	for (let s = 0; s < secondSlide.length; s++) {
		secondSlide[s].style.opacity = '0'

		setTimeout(() => {
			secondSlide[s].style.display = 'none';
			for (let i = 0; i < firstSlide.length; i++) {
				firstSlide[i].style.display = 'flex'

				setTimeout(() => {
					firstSlide[i].style.opacity = '1'
				}, 10)
			}
		}, 300)



	}
})
