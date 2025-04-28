'use strict';

//https://cors-anywhere.herokuapp.com
//https://www3.kau.se/tentamenslista/rss.xml

window.addEventListener('load', ()=> {

    fetch('https://cors-anywhere.herokuapp.com/https://www3.kau.se/tentamenslista/rss.xml').then(response=>response.text()).then(buildGUI);

});


function buildGUI(strBody) {
    //console.log(strBody);

    let domParser = new window.DOMParser();

    let XMLDom = domParser.parseFromString(strBody, 'application/xml');

    let items = XMLDom.querySelectorAll('item');
    console.log(items);

    let htmlDOMRef = document.getElementById('container');

    let ul = document.createElement('ul');
    ul.classList.add('list-group');
    htmlDOMRef.appendChild(ul);

    items.forEach(item=> {
        let li = document.createElement('li');
        li.className = 'list-group-item';

        let h5 = document.createElement('h5');

        h5.textContent = item.querySelector('title').textContent;
        li.appendChild(h5);

        let p = document.createElement('p');
        p.innerHTML = item.querySelector('description').textContent;

        li.appendChild(p);

        ul.appendChild(li);

    });


}
