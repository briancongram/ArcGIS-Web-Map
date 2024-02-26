require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Sketch",
  "esri/widgets/Home"
], function (esriConfig, Map, MapView, GraphicsLayer, Sketch, Home) {
  esriConfig.apiKey =
    "AAPK49c9c9dd4a104ad88539b9e8c78364a0Skt5XCW6rBeN5qBiB2NaXqgGxx_6JaO-QceE0gf4b1gNto2C9hTl2kXh5miYD4si";

  const map = new Map({
    basemap: "arcgis/topographic"
  });

  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });

  // Create a GraphicsLayer
  const graphicsLayer = new GraphicsLayer();

  // Add the GraphicsLayer to the map
  map.add(graphicsLayer);

  // Create a Sketch widget and specify the layer for sketching
  const sketchWidget = new Sketch({
    layer: graphicsLayer,
    view: view
  });

  // Add the Sketch widget to the view
  view.ui.add(sketchWidget, "top-right");

  // Create a Home Widget
  const homeWidget = new Home({
    view: view
  });

  // Add Home Widget to the Top left corner
  view.ui.add(homeWidget, "top-left");
});
