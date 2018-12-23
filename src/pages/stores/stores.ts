import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { ResultsPage } from '../results/results';
import { Store } from '../../models/store';

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

  // o StoresProvider faz o load uma vez da lista de marcas dentro do raio e está em ../../providers/stores/stores
  constructor(public navCtrl: NavController, public stores: StoresProvider ) {
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



  alterButton(){
    /*
    var removeBtn = document.getElementById("removeIcon");
    if (removeBtn != null) {
      removeBtn.remove();
    } else {
      document.getElementById("item").innerHTML += "<button id='removecon' (click)='removeStore()'><ion-icon name='md-remove-circle' style='color:red; font-size:2em'></ion-icon></button>"
    }
    */
  }

  getStoresId(){
    var storesIds = [];
    this.selectionStroes.forEach(element => {
      storesIds.push(element);
    });
    return storesIds;

  }

  onLoadResults(){
    var storesIds = [];
    this.selectionStroes.forEach(element => {
      storesIds.push(element);
    });
    if (this.selectionStroes.length > 0) {
      this.navCtrl.push(ResultsPage);
    }
    
  }
}


        
        