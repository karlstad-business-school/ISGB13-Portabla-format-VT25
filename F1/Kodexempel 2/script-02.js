window.addEventListener('load', init);

function init() {
  window.fetch('https://restcountries.com/v3.1/name/sweden').then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data);
  });
}
