// Cut and pasted from: https://developers.google.com/maps/documentation/javascript/examples/map-simple?hl=en_US#maps_map_simple-javascript
// AIzaSyA_Gf-rj93VuhsE2BqeNYmHjcsyz5WSoN4 API KEY
// Initialize and add the map
function initMap () {
  // The location of Messer Computer is just a random location in Ottawa 45.367589, -75.752996
  const storeLocation = { lat: 45.367589, lng: -75.752996 }
  // The map, centered at Messer Computer. First we create a new object of Map we put into the parameter map. This will
  //Tell the function what id selector to pass the information.
  const map = new google.maps.Map(document.getElementById('map'), {
    // Next we can set the properties of the object Map
    zoom: 10,
    center: storeLocation
  })

  //This cons variable will contain the string I need to provide he store location, address and such for the Window content.
  //Credit goes to https://www.w3schools.com/js/js_const.asp for learning the syntax
  const infoWindowContent =
    '<h1>Messer Computers</h1>' +
    '<p>Value and Performance<br>' +
    '12345 Address rd<br>' +
    'Ottawa, Ontario<br>' +
    'K0C 1X0<br>' +
    'Phone: 1+ (613)-123-4567<br>' +
    'Email: MesserComputers@gmail.com</p>'

  //This is a copy of the windows developers guide to adding info Windows. The InfoWindow constructor will create an object literal which contains multiple fields that can be manipulated. I will be changing the content field for now to my const variable infoWindowContent.
  //credit for this code goes to https://developers.google.com/maps/documentation/javascript/infowindows.
  const infowindow = new google.maps.InfoWindow({
    content: infoWindowContent
  })

  // The marker function will display the familiar default icon on google maps, to determine the position of the marker we will be using the storeLocation variable.
  // The google.maps.Marker constructor will create a literal object of type marker. We will then change the initial values of the marker with our values.
  const marker = new google.maps.Marker({
    position: storeLocation,
    map: map
  })

  //The addlistener is telling the marker object to listen for an event, in this case a click. when a click is detected on the marker infoWindow.open() will run.
  //resources for this code is from: https://developers.google.com/maps/documentation/javascript/events
  marker.addListener('click', () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false
    })
  })
}
