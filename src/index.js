const searchInput = document.querySelector('.search-input');
const label = searchInput.closest('label');
const galleryContainer = document.querySelector('.gallery');

let search = 'office';
const accessKey = 'YkDVQIKbt9r-n2fm7l2WusXLP27Y_5UuURcNP-di0i0'

/*https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY*/

let hasStartedTyping = false;

window.addEventListener('DOMContentLoaded', () => {
	searchInput.focus();
});

searchInput.addEventListener('input', handleInput);
searchInput.addEventListener('keydown', handleKeydown);
searchInput.setAttribute('autocomplete', 'off');

function handleInput() {
	if (!hasStartedTyping) {
		const button = createCloseButton();
		label.append(button);
		hasStartedTyping = true;
	}
}


function handleKeydown(event) {
	if (event.key === 'Enter') {
		search = searchInput.value;
		getData();
	}
}

function createCloseButton() {
	const button = document.createElement('button');
	button.type = 'button';
	button.classList.add('button__close');
	button.innerHTML = '&#215;';

	button.addEventListener('click', () => {
			clearInputAndRemoveButton(button);
		}
	);
	return button;
}

function clearInputAndRemoveButton(button) {
	searchInput.value = '';
	button.remove();
	hasStartedTyping = false;
}


async function getData() {
	const url = `https://api.unsplash.com/search/photos?query=${search}&per_page=30&orientation=landscape&client_id=${accessKey}`

	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await res.json();
		showData(data);
	} catch (error) {
		console.error('Fetch error:', error);
	}
}


function showData(data) {
	galleryContainer.innerHTML = '';
	data.results.map(item => {
		createImg(item);
	});
}

function createImg(element) {
	const img = document.createElement('div');
	img.classList.add("gallery__img");
	img.style.backgroundImage = `url(${element.urls.regular})`;
	galleryContainer.append(img);
}

getData();
