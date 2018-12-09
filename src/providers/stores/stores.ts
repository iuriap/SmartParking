
import { Injectable } from '@angular/core';
import { Store } from '../../models/store';
import {Http} from '@angular/http';


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

  //faz o pedido à api --> BD para receber as marcas contidas num raio de 70km das coordenadas 
  setLocation(location){
    this.coordinates = location.coordinates;
    this.getStores = this.http.get('http://localhost:3000/api/app/' + this.coordinates[0]+','+this.coordinates[1]);
    this.getStores.forEach(element => {
      var body = JSON.parse(element._body);
      this.getItems(body);
    });
  }

  constructor(public http: Http) {
  }

  query(params?: any) {    

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

  }
  

}
