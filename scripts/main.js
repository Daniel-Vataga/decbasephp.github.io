new WOW().init();

document.addEventListener("DOMContentLoaded", () => {
	let getId = id => document.getElementById(id);

	function scrollTop() {
		let scroll = this.scrollY;
		Math.round(scroll)

		if (scroll < 400) {
			getId('home').style.opacity = '0';
		}
		else {
			getId('home').style.opacity = '1';
		}
	}

	window.addEventListener('scroll', () => {
		scrollTop()
	})

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

let desktopNav = document.querySelector('.desktopMenu');

function getNavId(id) {
	let setId = id
	// for (let i = 0; i < desktopNav.childNodes.length; i++) {
	// 	desktopNav.childNodes[i].addEventListener('click', () => {
	if (setId === 'home') {
		Jump('.header')
	}
	if (setId === 'services') {
		Jump('.sectionServices')
	}
	if (setId === 'about') {
		Jump('.sectionAboutUs')
	}
	if (setId === 'blog') {
		Jump('.sectionBlog')
	}
	if (setId === 'contact') {
		Jump('.footer')
	}
	if (setId === 'signUp') {
		Jump('.sectionSignUp')
	}
	if (setId === 'projects') {
		Jump('.sectionCompletedWork')
	}
	// 	})

	// }


}



