function initMap(){
    //console.log("Inicializando mapa")
    const hiddenBeach = {
        lat: 11.18996677837269,
        lng: 119.28217273657896
    }

    const kohLipe = {
        lat: 6.492275675125011,
        lng: 99.3004265308964
    }

    const angkorWat = {
        lat: 13.412751068114408,
        lng: 103.86736120688211
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center : angkorWat
    })

    const marker1 = new google.maps.Marker( {
        position: hiddenBeach,
        map : map
    })

    const marker2 = new google.maps.Marker( {
        position: kohLipe,
        map : map
    })

    const marker3 = new google.maps.Marker( {
        position: angkorWat,
        map : map
    })

}

window.initMap = initMap