import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { ResultsPage } from '../results/results';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public stores: StoresProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresPage');
  }

  getStores(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentStores = [];
      return;
    }
    this.currentStores = this.stores.query({
      name: val
    });
  }

  addStore(Store){
    var row = "<li><div id=item ><p>"+Store.name+"</p> <ion-checkbox class='checkbox checkbox-md'><div class='checkbox-icon'><div class='checkbox-inner'></div></div><button class='item-cover  item-cover-md item-cover-default item-cover-default-md' ion-button='item-cover' role='checkbox' type='button' id='undefined' aria-checked='false' aria-disabled='false'><span class='button-inner'> </span><div class='button-effect'></div></button></ion-checkbox> </div><hr></li>";

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


        
        