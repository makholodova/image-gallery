/*const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";*/
const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=YkDVQIKbt9r-n2fm7l2WusXLP27Y_5UuURcNP-di0i0";
const searchInput = document.querySelector('.search-input');
const label = searchInput.closest('label');
const galleryContainer = document.querySelector('.gallery');

let hasStartedTyping = false;

searchInput.addEventListener('input', handleInput);
searchInput.addEventListener('keydown', handleKeydown);


function handleInput() {
	if (!hasStartedTyping) {
		const button = createCloseButton();
		label.append(button);
		hasStartedTyping = true;
	}
}

function handleKeydown(event) {
	if (event.key === 'Enter') {
		
		console.log('Enter was pressed');
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
