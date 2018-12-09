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
  constructor(public navCtrl: NavController, public stores: StoresProvider) {
 
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresPage');
    
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
    this.selectionStroes.push(Store);
    var row = "<li><div id=item ><p>"+Store.nome+"</p> <ion-checkbox class='checkbox checkbox-md'><div class='checkbox-icon'><div class='checkbox-inner'></div></div><button class='item-cover disable-hover item-cover-md item-cover-default item-cover-default-md' ion-button='item-cover' role='checkbox' type='button' id='undefined' aria-checked='false' aria-disabled='false'><span class='button-inner'> </span><div class='button-effect'></div></button></ion-checkbox> </div><hr></li>";
    
    document.getElementById("stores").innerHTML+=row;
  }

  alterButton(){
    var removeBtn = document.getElementById("removeIcon");
    if (removeBtn != null) {
      removeBtn.remove();
    } else {
      document.getElementById("item").innerHTML += "<button id='removecon' (click)='removeStore()'><ion-icon name='md-remove-circle' style='color:red; font-size:2em'></ion-icon></button>"
    }
    
  }
  onLoadResults(){
    this.navCtrl.push(ResultsPage);
  }
}


        
        