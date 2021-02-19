AOS.init({
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 100, // offset (in px) from the original trigger point
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
})

const burger = document.getElementById('burgerBtn');
const headerNavMobile = document.querySelector('.headerNavMobile');

function closeMobileNav() {
	headerNavMobile.style.top = '-100%';
	headerNavMobile.style.opacity = '0';
	document.body.style.overflow = 'unset';
}

burger.addEventListener('click', () => {
	burger.classList.toggle('open');

	if (burger.classList.contains('open')) {
		headerNavMobile.style.top = '0';
		headerNavMobile.style.opacity = '1';
		document.body.style.overflow = 'hidden';
	} else {
		closeMobileNav()
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

const headerNavLink = document.querySelectorAll(".headerNavLink");

for (const link of headerNavLink) {
	link.addEventListener("click", () => {
		burger.classList.remove('open');
		closeMobileNav();
	});
}

let navsArr = ['home', 'projects', 'services', 'about', 'blog', 'shop', 'home', 'contact'];

const services = document.querySelector('.servicesLink');

for (const navLink of navsArr) {
	console.log(navLink);
}