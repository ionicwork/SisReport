import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';





const firebaseConfig = {
  apiKey: "AIzaSyAU_miVxgwl-0EpptkuuZSqkM2r8Yv2bdM",
  authDomain: "sisreport-9ce9f.firebaseapp.com",
  projectId: "sisreport-9ce9f",
  storageBucket: "sisreport-9ce9f.appspot.com",
  messagingSenderId: "607924293351",
  appId: "1:607924293351:web:12256c9cbb7a5393e31c42"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , ],
  providers: [
    // WebView,
    // Camera,
   
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
