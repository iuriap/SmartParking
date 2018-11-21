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
     // var markerGroup = leaflet.featureGroup();
     var dragCircle;
     
      var marker: any = leaflet.marker([e.latitude, e.longitude], {draggable:'true'}).on('dragend', () => {
      //alert(marker.getLatLng());
      this.map.removeLayer(dragCircle);
      dragCircle = leaflet.circle(marker.getLatLng(), 7000,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
      
      //leaflet.circle(marker.getLatLng(), 7000,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
      })
      dragCircle = leaflet.circle(marker.getLatLng(), 7000,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
      
      //markerGroup.addLayer(marker);
      this.map.addLayer(marker);
      }).on('locationerror', (err) => {
        alert(err.message);
    }).on('dragend', function() {

		});
;

  }/*
  onMapClick(e) {
    this.map.marker = new leaflet.marker(e.latlng, {draggable:'true'});
    this.map.marker.on('dragend', function(event){
      var marker = event.target;
      var position = marker.getLatLng();
      marker.setLatLng(new leaflet.LatLng(position.lat, position.lng),{draggable:'true'});
      this.map.panTo(new leaflet.LatLng(position.lat, position.lng))
    });
    this.map.addLayer(this.map.marker);
  };
  */
 
}
