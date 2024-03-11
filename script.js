<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive Google Map with jQuery</title>
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<style>
    /* Set the map container size */
    #map {
        height: 400px;
        width: 100%;
    }
  body {
      font-family: URW Chancery L, cursive;
      font-size: 16px;
      background-color: #4F7942;
      margin: 0;
      padding: 0;
  }
</style>
</head>
  <h1>About Us</h1>
  <p>Welcome to Enchanté Enoteca, where the flavors of Sicily come to life in every dish, and the spirit of tradition is as rich as the soil that nurtured it.

  At Enchanté Enoteca, our story is one of love, passed down through generations. Inspired by the culinary legacy of our high school sweetheart beginnings, we bring you a dining experience infused with the warmth and authenticity of our Sicilian heritage.

  Our journey began in the kitchens of our mothers, where their passion for cooking ignited a flame within us. From them, we learned the art of transforming simple ingredients into exquisite dishes, each one a testament to the love and dedication poured into it.

  Drawing from our Sicilian roots, our menu is a celebration of traditional recipes handed down from our mothers' kitchens in the sun-drenched hills of Italy. From hearty pastas to succulent seafood, each dish is crafted with care, using only the freshest ingredients and time-honored techniques.

  As you step into Enchanté Enoteca, you're not just dining at a restaurant; you're joining our family. Here, every meal is an invitation to share in our heritage, to savor the flavors of Sicily, and to create new memories that will last a lifetime.

  So come, let us enchant your senses and transport you to the heart of Italy. Benvenuti alla nostra tavola. Welcome to Enchanté Enoteca.</p>

<body>
<h1>Sicily, Italy </h1>
<div id="map"></div>
<!-- Load Google Maps API asynchronously -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7W7N9fgT_85f_OEW4mWJtSwfu151cOgc&callback=initMap"></script>
<script>
// Function to initialize the map
function initMap() {
    // Coordinates for Sicily, Italy
    var sicily = {lat: 37.5999938, lng: 14.0153557};
    // Create a new map centered on Sicily
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: sicily
    });
    // Add a marker for Sicily
    var marker = new google.maps.Marker({
        position: sicily,
        map: map,
        title: 'Sicily, Italy'
    });
}
</script>
</body>
</html>




