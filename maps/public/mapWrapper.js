var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var contentString = "latitude  " + coords.lat.toFixed(4) + " longitude:  " + coords.lng.toFixed(4);
    var infowindow = new google.maps.InfoWindow({
     content: contentString
   });
    marker.addListener('click', function() {
     infowindow.open(this, marker);
   });
    return marker;
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      var onClickCoords = {lat: lat, lng: lng}
      this.addMarker(onClickCoords);
    }.bind(this));
  },

  addInfoWindow: function(coords, contentString) {
    var marker = this.addMarker(coords);
    marker.addListener('click', function() {
      var infowindow = new google.maps.InfoWindow({
        position: coords,
        content: contentString,
        map: this.googleMap
      });
      infowindow.open(this.map, marker);
    });
  },

  setCenter: function(coords) {
    this.googleMap.setCenter(coords)
  }
};

