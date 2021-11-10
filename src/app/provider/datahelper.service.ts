import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatahelperService {
  public user:any={}
  constructor( public navCtrl:NavController,
    public loadingController: LoadingController
    ) { }

    async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        
      });
      await loading.present();
  
      
    }

    dismiss(){
      this.loadingController.dismiss();
      console.log('Loading dismissed!');
    }
  
  

  getUserData(uid){
    firebase.database().ref('users/'+uid).once('value',(snapshot)=>{
     console.log(snapshot.val());
     localStorage.setItem('user' ,JSON.stringify(snapshot.val()));
     this.user=snapshot.val();
     this.navCtrl.navigateRoot('dashboard');
     
    }).catch((err)=>{
    })
  }
}
