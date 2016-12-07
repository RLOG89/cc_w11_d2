var mainMap = {};

var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = {lat: 55.946723, lng: -3.202866};
  var maui = {lat: 20.7984, lng: -156.3319};
  mainMap = new MapWrapper(mapDiv, center, 14);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center)
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;
}

var handleButtonClick = function() {
  var maui = {lat: 20.7984, lng: -156.3319};
  mainMap.setCenter(maui);
  mainMap.addMarker(maui);

}

window.onload = initialize;