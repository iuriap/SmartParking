
import { Injectable } from '@angular/core';
import { Store } from '../../models/store';
import {Http} from '@angular/http';
import { AlertController} from 'ionic-angular';


/*
  Generated class for the StoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoresProvider {

  items: Store[] = [];
  getStores;
  coordinates;
  nItems;

  //faz o pedido à api --> BD para receber as marcas contidas num raio de 70km das coordenadas 
  setLocation(location, rad){
    this.coordinates = location.coordinates;
    this.getStores = this.http.get('http://localhost:3000/api/app/marcas/' + this.coordinates[0]+','+this.coordinates[1] + "/" + rad);
    this.getStores.forEach(element => {
      var body = JSON.parse(element._body);
      this.getItems(body);
      this.nItems = this.items.length;
      alert(this.nItems);
    });
  }
  getNItems(){
     return this.items;
  }

  constructor(public http: Http, private alertCtrl: AlertController) {
  }

  query(params: any) {    

    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Store) {
    this.items.push(item);
  }

  delete(item: Store) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getItems(json){
    let items = json;

    for (let item of items) {
      this.items.push(new Store(item));
    }
    if (items.length <=0) {
      this.presentAlert();
    }
    
  }



  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nenhuma loja',
      subTitle: 'Não encontramos nenhuma loja na sua localização',
      buttons: [{
        text: 'Voltar',
        role: 'cancel',
        handler: () => {

          console.log('Cancel clicked');
        }
      }]
    });
    alert.present();
  }

}
