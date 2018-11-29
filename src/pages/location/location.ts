import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController} from 'ionic-angular';
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
    /* enviar JSON para API*/
    this.navCtrl.push(StoresPage);
  }
  
  loadmap() {
    
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'SmartParking',
      maxZoom: 40
        }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 12
    }).on('locationfound', (e) => {
     let dragCircle;
     var radius = 7000;
     
      var marker: any = leaflet.marker([e.latitude, e.longitude], {draggable:'true'}).on('dragend', () => {
      this.map.removeLayer(dragCircle);
      dragCircle = leaflet.circle(marker.getLatLng(), radius,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
    })
      dragCircle = leaflet.circle(marker.getLatLng(), radius,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
    
      this.map.addLayer(marker);
      this.map.addLayer(dragCircle);
      
      alert(JSON.stringify(dragCircle.toGeoJSON().geometry) + " raio para calcular: (" + JSON.stringify(radius) +") KMs");
      
    }).on('locationerror', (err) => {
        alert(err.message);
    }).on('dragend', function() {

		});
;

  }
 
}
