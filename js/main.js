var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.93863106417265,30.3230545],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

}