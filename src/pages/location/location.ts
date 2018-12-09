import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController} from 'ionic-angular';
import leaflet from 'leaflet';
import { StoresPage } from '../stores/stores';
import { StoresProvider } from '../../providers/stores/stores';


@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  location;
  constructor(public navCtrl: NavController, public stores: StoresProvider) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    
  }

  ionViewDidEnter() {
    this.loadmap();
    
  }
  
  onLoadStores(){
    //envia a localização ao mudar de pagina. 
    //esta localização vai preencher o Provider stores onde vai processar o pedido à API
    this.stores.setLocation(this.location);

    this.navCtrl.push(StoresPage);
    
  }
  
  //apresenta o mapa na pagina
  loadmap() {
    
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'SmartParking',
      maxZoom: 40
        }).addTo(this.map);
    this.map.locate({
      setView: true,
      //zoom out para aparecer o circlo quando é encontrada uma localização 
      maxZoom: 12
    }).on('locationfound', (e) => {
     let dragCircle;
     //raio para o utilizador perceber até onde o filtro se aplica
     var radius = 7000;
     
     //craição do marcador que é arrastavel bem como a area circular
      var marker: any = leaflet.marker([e.latitude, e.longitude], {draggable:'true'}).on('dragend', () => {
      this.map.removeLayer(dragCircle);
      dragCircle = leaflet.circle(marker.getLatLng(), radius,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
    })
      dragCircle = leaflet.circle(marker.getLatLng(), radius,{color:'lightgreen',opacity:1,fillColor: 'blue',fillOpacity:.4}).addTo(this.map);
    
      //adiciana o marcador e a area ao mapa
      this.map.addLayer(marker);
      this.map.addLayer(dragCircle);
      
      //alert(JSON.stringify(dragCircle.toGeoJSON().geometry) + " raio para calcular: (" + JSON.stringify(radius) +") KMs");
      this.location = dragCircle.toGeoJSON().geometry;
    }).on('locationerror', (err) => {
        alert(err.message);
    }).on('dragend', function() {

		});
;

  }
 
}
