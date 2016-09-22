require( [
  "esri/Map",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapView) {
  var map = new Map({
      basemap: "streets",
      ground: "world-elevation"
  });
  var view = new MapView( {
      container: "map-div",
      map: map,
      center: [-98, 38],
      zoom: 7,
  } );
} );
