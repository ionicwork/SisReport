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
