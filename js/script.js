function init() {
 
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(36.132868, -115.157191);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  
}
google.maps.event.addDomListener(window, 'load', init); 
