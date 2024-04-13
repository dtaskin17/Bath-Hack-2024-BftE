import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor() {}

  ngOnInit() {
    const apiKey = 'AIzaSyCKKp4K1hshLxDND05FK209E6ZijGszxjc';
    const mapRef = document.getElementById('map');
    if (mapRef) {
      const newMap = GoogleMap.create({
        id: 'my-map',
        element: mapRef,
        apiKey: apiKey,
        config: {
          center: {
            lat: 52.3555,
            lng: -1.1743,
          },
          zoom: 8,
        },
      });
    } else {
      console.error('Element with id "map" not found.');
    }
  }
}
