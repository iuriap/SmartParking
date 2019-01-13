import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MallsProvider } from '../../providers/malls/malls';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  mallsList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public malls: MallsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
