let myMap;

const init = () =>{
    myMap = new ymaps.Map('map',{

    center: [55.728796, 37.474905],
    zoom: 15,
    controls:[]
    });
    const coords = [
        [55.725487,37.464571],
        [55.733038,37.476212],
        [55.732038, 37.465039]
    ];
    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/map/map.svg',
        iconImageSize: [45, 59],
        iconImageOffset: [-15, -27]
    });
    coords.forEach(coord =>{
        myCollection.add(new ymaps.Placemark(coord));
    });
    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);