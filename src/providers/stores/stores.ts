
import { Injectable } from '@angular/core';
import { Store } from '../../models/store';

/*
  Generated class for the StoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoresProvider {

  items: Store[] = [];

  defaultItem: any = {
    "name": "Paga Mais"
  };


  constructor() {
    let items = [
      {
        "name": "Poupa Menos"
      },
      {
        "name": "Paga 3 leva 2"
      },
      {
        "name": "Continencia"
      },
      {
        "name": "Auchim"
      },
      {
        "name": "Primomark"
      },
      {
        "name": "Pingo Azedo"
      },
      {
        "name": "Já volto"
      }
    ];

    for (let item of items) {
      this.items.push(new Store(item));
    }
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

}
