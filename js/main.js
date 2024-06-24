const btnDark = document.querySelector('.dark-mode-btn');

// 1. dark theme browser check
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	btnDark.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
}

// 2. dark theme localStorage check
if (localStorage.getItem('darkMode') === 'dark') {
	btnDark.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDark.classList.remove('dark-mode-btn--active');
	document.body.classList.remove('dark');
}

//if browser theme changes
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', (event) => {
		const newColorScheme = event.matches ? 'dark' : 'light';
		if (newColorScheme === 'dark') {
			btnDark.classList.add('dark-mode-btn--active');
			document.body.classList.add('dark');
			localStorage.setItem('darkMode', 'dark');
		} else {
			btnDark.classList.remove('dark-mode-btn--active');
			document.body.classList.remove('dark');
			localStorage.setItem('darkMode', 'light');
		}
	});

//Dark mode toggle button
btnDark.onclick = function () {
	btnDark.classList.toggle('dark-mode-btn--active');

	const isdark = document.body.classList.toggle('dark');

	isdark
		? localStorage.setItem('darkMode', 'dark')
		: localStorage.setItem('darkMode', 'light');
};
