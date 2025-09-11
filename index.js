function initMap() {
  // Center on Borama
  const center = { lat: 9.933, lng: 43.183 };

  const map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 7,
    center: center,
  });

  // Example bus stops
  const stops = [
    { name: "Borama", lat: 9.933, lng: 43.183 },
    { name: "Hargeisa", lat: 9.562, lng: 44.077 },
    { name: "Burco", lat: 9.522, lng: 45.533 },
  ];

  stops.forEach(stop => {
    new google.maps.Marker({
      position: { lat: stop.lat, lng: stop.lng },
      map: map,
      title: stop.name,
    });
  });

  // User location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const userPos = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      new google.maps.Marker({
        position: userPos,
        map: map,
        title: "You are here",
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      });
      map.setCenter(userPos);
    });
  }
}

// Initialize map when page loads
window.onload = initMap;
