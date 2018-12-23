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



  constructor(public http: Http) {
    
  }

  setMalls(){
   var storesId = this.stores.getStoresId();
   alert(JSON.stringify(storesId));
   return storesId;
  }

}
