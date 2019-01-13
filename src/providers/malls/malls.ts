import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { StoresPage } from '../../pages/stores/stores';

/*
  Generated class for the MallsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MallsProvider {
stores: StoresPage;
malls;
selectedStores: any [];


  constructor(public http: Http) {
  }

  getSelcStores(storesId){
    storesId.array.forEach(element => {
      this.selectedStores.push(element);
      alert(element);
    });
    this.malls = this.http.get('http://localhost:3000/api/app/centros/' + this.selectedStores);
        this.malls.forEach(element => {
          alert(element);
        });
   
  }

}
