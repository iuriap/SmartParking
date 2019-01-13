import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { ResultsPage } from '../results/results';
import { Store } from '../../models/store';
import { MallsProvider } from '../../providers/malls/malls';

/**
 * Generated class for the StoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {
  currentStores: any = [];
  coordinates;
  selectionStroes: Store = [];
  storesIds;

  // o StoresProvider faz o load uma vez da lista de marcas dentro do raio e está em ../../providers/stores/stores
  constructor(public navCtrl: NavController, public stores: StoresProvider, public malls: MallsProvider ) {
 }



  // evento dispultado quando o user carrega na barra de procurar (não faz o load da lista da marcas).
  getStores(ev) {  
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentStores = [];
      return;
    }
    this.currentStores = this.stores.query({
      nome: val
    });
  }

  addStore(Store){
    if (this.selectionStroes.indexOf(Store) == -1) {
    this.selectionStroes.push(Store);
          }
        }
      

  deleteStore(Store){
    let index = this.selectionStroes.indexOf(Store);
 
        if(index > -1){
            this.selectionStroes.splice(index, 1);
        }
  }


  getStoresId(){
  
    this.selectionStroes.forEach(element => {
      this.storesIds.push(element);
    });
    return this.storesIds;

  }

  onLoadResults(){

    /*
    this.selectionStroes.forEach(element => {
      storesIds.push(element);
    });
    if (this.selectionStroes.length > 0) {
      this.navCtrl.push(ResultsPage);
    }  
  }*/
  console.log(this.getStoresId());

  if (this.selectionStroes.length > 0) {
    this.navCtrl.push(ResultsPage);
  }
  //this.malls.getSelcStores(storesIds); 
  }
}


        
        