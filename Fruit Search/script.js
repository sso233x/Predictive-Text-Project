const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	const lowerCaseFruit = str.toLowerCase();
	results = fruit.filter(fruitName => fruitName.toLowerCase().includes(lowerCaseFruit));
	return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {

	// TODO
	suggestions.innerHTML = '';
	results.forEach(result =>{
		const li = document.createElement('li');
		li.textContent = result;
		li.dataset.value = result;
		li.addEventListener('mouseover', () => {
			const allSuggestions = suggestions.querySelectorAll('li');
			allSuggestions.forEach((item) => item.classList.remove('highlighted'));
			li.classList.add('highlighted');
		  });
		  li.addEventListener('mouseout', () => {
			li.classList.remove('highlighted');
		  });
		suggestions.appendChild(li);
	});
	if(results.length > 0){
		suggestions.classList.add('has-suggestions');
	}
	else{
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	// TODO
	if(e.target.tagName === 'LI'){
		input.value = e.target.dataset.value;
		suggestions.innerHTML = '';
		suggestions.classList.remove('has-suggestions');
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);