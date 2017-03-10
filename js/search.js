
//kaleo api
const api = 'https://demo1.kaleosoftware.com/v4/search.json?sitemap_token=123456789&sitemap=sales';

//array to put json from kaleo api
const results = [];

//es6 method of get request
fetch(api)
	.then(info => info.json())
	.then(data => results.push(data));


//function to filter search results of kaleo api irrespective of letter case
function searchResults(wordToMatch, results) {

	return results[0].collection.filter(answer => {

		const regex = new RegExp(wordToMatch, 'gi');

		return answer.title.match(regex)
	});
}

//real-time results of search displaying letter by letter
const searchInput = document.querySelector('.search');
const answers = document.querySelector('.answers');

		searchInput.addEventListener('keyup', function listMatches() {

			const matchesArray = searchResults(this.value, results);
			console.log(matchesArray)

			const html = matchesArray.map(show => {
				return `
					<li>
						<span class="title">${show.title}</span>
					</li>`;
		});
			answers.innerHTML = html;
	});


			

			















