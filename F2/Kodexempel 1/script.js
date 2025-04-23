/**
 * Makes a request to https://restcountries.com/v3.1/name/{query} and displays a the results.
 * @param {string} query The user’s search query
 * @param {HTMLElement} container The <tbody> element that the result will be printed to
 */
function search(query, container) {
  // TODO: Rewrite to match the specification
  window.fetch('https://restcountries.com/v3.1/name/' + query)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('preloader').classList.add('d-none');

      for(let i=0; i<data.length; i++){


        let card = document.createElement('div');
        card.setAttribute('class','card');
        card.style.minWidth = '20rem';
        card.style.width = '25%';
        container.appendChild(card);

        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = data[i].flags.png;
        img.alt = data[i].flags.alt;
        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        let title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = data[i].name.common;
        cardBody.appendChild(title);

        let size = document.createElement('p');
        size.className = 'card-text';
        size.innerHTML = data[i].area + ' km<sup>2</sup>';

        cardBody.appendChild(size);

      }

    });
}

window.addEventListener('load', ()=> {
  document.getElementById('preloader').classList.add('d-none');

  document.querySelector('#search-form').addEventListener('submit', (evt)=> {
    evt.preventDefault();
    let searchString = document.getElementById('search').value;
    let container = document.getElementById('content');
    document.getElementById('preloader').classList.remove('d-none');
    search(searchString, container);
  })
})
