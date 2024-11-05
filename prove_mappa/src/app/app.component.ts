import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // Importa la libreria Leaflet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map: any; // Variabile per la mappa

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    this.map = L.map('map').setView([41.878114, -87.629798], 13);  // Imposta la posizione iniziale e lo zoom

    // Aggiungi il layer della mappa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Aggiungi un marker sulla mappa
    L.marker([41.878114, -87.629798]).addTo(this.map)
      .bindPopup('A simple marker')
      .openPopup();
  }
}
