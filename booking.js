// Find the "Book an Uber" button on the page
var bookUberButton = document.getElementById('book-uber-button');

// Add a click event listener to the button
bookUberButton.addEventListener('click', function() {
    // Try to get the user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(function(position) {
        // If the user's location is retrieved successfully, launch the Uber app with the pickup location set to the user's current location
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = 'uber://?action=setPickup&pickup[latitude]=' + latitude + '&pickup[longitude]=' + longitude;
        window.location.href = url;
    }, function() {
        // If the user's location cannot be retrieved, display an error message
        alert('Could not retrieve your location. Please enable location services in your browser settings and try again.');
    });
});
