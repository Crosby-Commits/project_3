 /* var marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: 36.132868, lng: -115.157191 },
  });
  
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
  });
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 36.132868, lng: -115.157191 },
    map,
    icon: image,
  }); */
async function addMarker () {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  var img = document.createElement("img");
  img.src= "media/smiley.png";
  img.width=42; img.height=42;
  var marker = new AdvancedMarkerElement({
    map: myMap,
    content: img, 
  position: {lat: 36.132868, lng: -115.157191},
    title: "Click Me",
  });
    const flightPlanCoordinates = [
    { lat: 36.13254, lng: -115.15952 },
    { lat: 36.13449, lng: -115.15829 },
    { lat: 36.13604, lng: -115.15908 },
    { lat: 36.13601, lng: -115.15685 },
    { lat: 36.13254, lng: -115.15520 },
    { lat: 36.13254, lng: -115.15952 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(myMap);
    const infowindow = new google.maps.InfoWindow({
    content: "<h1>DEF CON is Here</h1>",
    ariaLabel: "DEF CON",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      myMap,
    });
  });
}

addMarker ();

  


