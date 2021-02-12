const burger = document.getElementById('burgerBtn');
const headerNavMobile = document.querySelector('.headerNavMobile');

function openMenu() {
	headerNavMobile.style.top = '0';
	headerNavMobile.style.opacity = '1';
	document.body.style.overflow = 'hidden';
}

function closeMenu() {
	headerNavMobile.style.top = '-100%';
	headerNavMobile.style.opacity = '0';
	document.body.style.overflow = 'unset';
}

burger.addEventListener('click', () => {
	burger.classList.toggle('open');

	if (burger.classList.contains('open')) {
		openMenu()
	} else {
		closeMenu()
	}
})