import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { LocationPage } from '../pages/location/location';
import { StoresPage } from '../pages/stores/stores';
import { StoresProvider } from '../providers/stores/stores';
import { ResultsPage } from '../pages/results/results';
import { VerificationPage } from '../pages/verification/verification';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPage,
    StoresPage,
    ResultsPage,
    VerificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationPage,
    StoresPage,
    ResultsPage,
    VerificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoresProvider
  ]
})
export class AppModule {}
