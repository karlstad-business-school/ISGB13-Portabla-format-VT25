window.addEventListener('load', init);

function init() {
  window.fetch('https://restcountries.com/v3.1/name/sweden').then(function(response) {
    console.log(response)
  });
}
