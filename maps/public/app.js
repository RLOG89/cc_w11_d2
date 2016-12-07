var mainMap = {};

var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = {lat: 55.946723, lng: -3.202866};
  var maui = {lat: 20.7984, lng: -156.3319};
  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">CodeClan</h1>'+
    '<div id="bodyContent">'+
    '<p><b>CodeClan</b>, also referred to as <i>the place dreams are made of</i>, ' + 
    'is a pretty cool place! </p>' + 
    '</div>'+
    '</div>';
  mainMap = new MapWrapper(mapDiv, center, 14);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, contentString)
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;
  var button = document.querySelectorAll('button')[1];
  button.onclick = handleClick;
}

var handleButtonClick = function() {
  var maui = {lat: 20.7984, lng: -156.3319};
  mainMap.setCenter(maui);
  mainMap.addMarker(maui);
}

var handleClick = function() {
  var home = {lat: 55.946723, lng: -3.202866};
  mainMap.setCenter(home);
  mainMap.addMarker(home);
}

window.onload = initialize;