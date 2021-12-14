import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DatahelperService } from './provider/datahelper.service';
import { PushnotificationService } from './provider/pushnotification.service';
import firebase from 'firebase';
// import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

declare var FirebasePlugin: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform:Platform,
    // private localNotifications: LocalNotifications,
    public dataHelper:DatahelperService  , public pushNotification:PushnotificationService
    ,public navCtrl:NavController) {
   this.platform.ready().then(() => {
    
    var data=JSON.parse(localStorage.getItem('user'))
    // debugger;
    if(data?.uid){
      this.dataHelper.user=data;
      this.navCtrl.navigateRoot(['/dashboard']);
    }else{ 
      this.platform.ready().then(() => {
      data=JSON.parse(localStorage.getItem('employee'))
      if(data?.uid){
        this.dataHelper.user=data;
        this.navCtrl.navigateRoot(['/udashboard']);
      }else{
       this.navCtrl.navigateRoot(['/welcome']);
      }
     });
    }
   });
   
 }
 
//  notificationsMethods() {
//   if (this.platform.is('cordova')) {
//     FirebasePlugin.grantPermission((hasPermission) => {
//       console.log('Permission was ' + (hasPermission ? 'granted' : 'denied'));
//     });

//     FirebasePlugin.hasPermission((hasPermission) => {
//       console.log('Permission is ' + (hasPermission ? 'granted' : 'denied'));
//     });

//     FirebasePlugin.getToken((token) => {
//       this.saveDeviceToken(token);
//     }, (error) => {
//       console.error(error);
//     });

//     FirebasePlugin.onTokenRefresh((token) => {
//       if (localStorage.getItem('deviceToken') !== token) {
//         this.saveDeviceToken(token);
//       }
//     }, (error) => {
//       console.error(error);
//     });

//     FirebasePlugin.onMessageReceived((message) => {
//       if (!message.tap) {
//         this.localNotifications.schedule({
//           id: 1,
//           title: message.title,
//           text: message.body,
//           foreground: true,
//           smallIcon: '/assets/imgs/logo2.png',
//         });
//       }
//       if (message.chat) {
//         if (message.tap === 'background') {
          
//         } else {

//           // this.showToastMsg();
//         }
//       }
//     });
//   }
// }
saveDeviceToken(token: string) {
  if (localStorage.getItem('deviceToken') !== token) {
    localStorage.setItem('deviceToken', token);
    if (localStorage.getItem('uid')) {
      this.setUserToken(token);
    }
  }
}
setUserToken(token) {
  var uid = localStorage.getItem('uid');
  firebase.database().ref().child(`users/${uid}/deviceTokens`)
    .once('value').then(snapshot => {
      var tokens: Array<string> = snapshot.val() || [];
      if (tokens.indexOf(token) < 0) {
        tokens.push(token);
        firebase.database().ref().child(`users/${uid}/deviceTokens`).set(tokens);
      }
    })
    .catch(err => {
      console.log(err.message);
    });
}

//  initializeApp(){
//    this.platform.ready().then(()=>{
     
    
//    })
//  }
}
