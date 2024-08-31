const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	//console.log(data.results[0].urls.regular); //
}
getData();
