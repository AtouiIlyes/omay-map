import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import * as L from 'leaflet';
import { MatDialog } from '@angular/material/dialog';
import { StreetComponent } from '../street/street.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  myMap: any;
  latLon = [35.505599, 11.065294];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let btsIcon = L.icon({
      iconUrl: './assets/icons/antenna.svg',
      iconSize: [60, 60],
      iconAnchor: [15, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      compileMessage: true,
    });
    this.myMap = L.map('mapid', {
      zoom: 6,
      minZoom: 2,
    }).setView(this.latLon, 15);
    L.tileLayer('http://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}').addTo(
      this.myMap
    );
    let btn = `<div ><button #street id="street" style="top: 5px;left: calc(50% - 48.5px);" mat-raised-button="" type="submit" class="mat-focus-indicator mat-raised-button mat-button-base"><span class="mat-button-wrapper">`;
    btn += `show street </span><div matripple="" class="mat-ripple mat-button-ripple"></div><div class="mat-button-focus-overlay"></div></button></div>`;

    L.marker(this.latLon, { icon: btsIcon })
      .addTo(this.myMap)
      .bindPopup(
        `<div class='popup-custom-bloc-data'><strong class='title'> BTS </strong>` +
          btn +
          `</div>`
      );
    let that = this;
    this.myMap.on('popupopen', function (popupEvent) {
      let buttons = document.getElementById('street');
      if (buttons !== null) {
        buttons.addEventListener('click', function (e) {
          that.showStreetDialog([35.505599, 11.065294]);
        });
      }
    });
  }

  showStreetDialog(map) {
    const dialogRef = this.dialog.open(StreetComponent, {
      width: window.innerWidth < 720 ? '100%' : window.innerWidth / 1.2 + 'px',
      height: window.innerWidth < 720 ? '100%' :'auto',
      data: { lat: map[0], lon: map[1] },
      maxWidth: 'none',
    });
  }
}
