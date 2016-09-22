require( [
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/TileLayer",
  "dojo/domReady!"
], function(Map, MapView, TileLayer) {
  var basemapLayer = new TileLayer( {url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer", id:"Base Map"} );

  var map = new Map( {
      layers: [basemapLayer]
  } );

  var view = new MapView( {
      container: "map-div",
      map: map,
      center: [-98, 38],
      zoom: 7,
  } );

} );
