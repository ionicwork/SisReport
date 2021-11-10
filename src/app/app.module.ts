import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyAvX_iO61GCN8wzs1q4hx6WId8sZxaPPtY",
  authDomain: "sisreport-83f8c.firebaseapp.com",
  projectId: "sisreport-83f8c",
  storageBucket: "sisreport-83f8c.appspot.com",
  messagingSenderId: "336950066755",
  appId: "1:336950066755:web:96109b42dda4d08662def6"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
