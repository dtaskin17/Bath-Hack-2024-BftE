import { GoogleMap } from '@capacitor/google-maps';
document.addEventListener('DOMContentLoaded', () => {

  const apiKey = 'AIzaSyCKKp4K1hshLxDND05FK209E6ZijGszxjc';

  const mapRef = document.getElementById('map');
  if (mapRef) {
    const newMap = GoogleMap.create({
      id: 'my-map',
      element: mapRef,
      apiKey: apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  } else {
    console.error('Element with id "map" not found.');
  }});