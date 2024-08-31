const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	showData(data);
	//console.log(data.results[0].urls.regular); //
}

const galleryContainer = document.querySelector('.gallery');

function showData(data) {
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
