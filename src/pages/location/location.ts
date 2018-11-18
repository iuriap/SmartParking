import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import leaflet from 'leaflet';
import { StoresPage } from '../stores/stores';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  ionViewDidEnter() {
    this.loadmap();
  }
  
  onLoadStores(){
    this.navCtrl.push(StoresPage);
  }
  
  loadmap() {
    
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'SmartParking',
      maxZoom: 50
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 50
    }).on('locationfound', (e) => {
      var markerGroup = leaflet.featureGroup();
      var marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert([e.latitude, e.longitude]);
        
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    }).on('dragend', function() {

			//var myMarker = this.markerGroup.marker;
		});
;
    
  }

  

 
}
