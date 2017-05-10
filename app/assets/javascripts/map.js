function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 40.731, lng: -73.997}
  });
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'\'',
      from: '1oRv1XTj89qwqxjx0ipjEWNH1ZEmImqWt9U4TF0vq' // Fusion table ID (public)
    }
  });
  layer.setMap(map);

  google.maps.event.addListener(map, 'click', function(event) {
      clickOnMap(geocoder, event.latLng);
  })
}

function clickOnMap(geocoder, latlng) {
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[1]) {
        $.post("/static/save_address",
          {
            latitude: latlng.lat(),
            longitude: latlng.lng(),
            address: results[1].formatted_address
          },
          function(data, status){
              window.alert("Data: " + data + "\nStatus: " + status);
          });
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
