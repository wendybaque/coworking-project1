function init() {
    const france = {
        lat: 46.227638,
        lng: 2.213749
    }
 
    const zoomLevel = 6;
 
    const map = L.map("map").setView([france.lat, france.lng], zoomLevel);
 
 
    const mainLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaXNtYW1hbWExIiwiYSI6ImNsMTVkdDN0bjAyY3AzY3FzM213d295dXcifQ.7_4maEiY0R4rH-uxRtQDMw'
    });
 
    mainLayer.addTo(map);
 
    L.marker([45.75, 4.85]).addTo(map);
    L.marker([48.866667, 2.333333]).addTo(map);
    L.marker([44.841225, -0.5800364]).addTo(map);
    L.marker([50.6365654, 3.0635282]).addTo(map);
    L.marker([43.6044622, 1.4442469]).addTo(map);
    L.marker([43.2961743, 5.3699525]).addTo(map);
    L.marker([38.7077507, -9.1365919]).addTo(map);
 
 
};
