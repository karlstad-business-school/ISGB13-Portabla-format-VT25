window.addEventListener('load', loadData);

function loadData() {
  let container = document.getElementById('content');
  let preloader = document.getElementById('preloader');

  window.fetch('https://restcountries.com/v3.1/name/sweden').then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data);
    let countryData = data[0];

    let card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '20rem';
    container.appendChild(card);

    let cardImage = document.createElement('img');
    cardImage.className = 'card-img-top';
    cardImage.src = countryData.flags.png;
    card.appendChild(cardImage)

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = countryData.name.common;
    cardBody.appendChild(cardTitle)

    let capital = document.createElement('p');
    capital.className = 'card-text';
    capital.innerHTML = '<b>Capital:</b> ' + countryData.capital;
    cardBody.appendChild(capital)

    let area = document.createElement('p');
    area.className = 'card-text';
    area.innerHTML = '<b>Area:</b> ' + countryData.area.toLocaleString() + ' km<sup>2</sup>';
    cardBody.appendChild(area)

    let population = document.createElement('p');
    population.className = 'card-text';
    population.innerHTML = '<b>Population:</b> ' + countryData.population.toLocaleString();
    cardBody.appendChild(population)

    preloader.classList.add('d-none')

  });
}
