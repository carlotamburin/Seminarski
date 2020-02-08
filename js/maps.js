function initMap() {
    var location = { lat:47.38141075095929, lng: 8.574550151824951 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });

    var marker=new google.maps.Marker({
        position:location,
        map:map
    });

   


}






