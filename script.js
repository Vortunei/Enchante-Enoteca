/*
console.log("Massandje,Emma and Gabriel");
*/

var audio = document.getElementById("myAudio");


function playAudio() {
  audio.play();
}


function pauseAudio() {
  audio.pause();
}


function setVolume(volume) {
  audio.volume = volume;
}

const button = document.querySelector("#button");
const canvas = document.querySelector("#canvas");

button.addEventListener("click", () => {


  if (typeof JSConfetti !== "undefined") {
    const JsConfetti = new JSConfetti.default();
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => console.log('Confetti animation completed!'));
  } else {
    console.error('JSConfetti is not defined. Make sure the library is properly loaded.');
  }
});

var startDate = new Date('2024-02-28');
var endDate = new Date('2024-03-18');


var difference = endDate.getTime() - startDate.getTime();


var daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));


console.log("Countdown from February 28, 2024, to March 18, 2024:");
for (var i = daysDifference; i >= 0; i--) {
  console.log("Days remaining: " + i);
}

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

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
  marker.setLabel('Sicily Marker');
}
initMap();

// Load Google Maps API through the proxy server using jQuery AJAX
$.ajax({
  url: '/maps/api/js?key=AIzaSyB7W7N9fgT_85f_OEW4mWJtSwfu151cOgc&callback=initMap',
  dataType: 'script',
  success: function() {
    // Google Maps API loaded successfully
    console.log('Google Maps API loaded successfully');
  },
  error: function() {
    // Error loading Google Maps API
    console.error('Error loading Google Maps API');
  }
});


