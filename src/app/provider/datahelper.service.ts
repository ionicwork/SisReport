import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import firebase from 'firebase';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DatahelperService {
  public user:any=[];
  public employee:any=[];
  constructor( public navCtrl:NavController,
    public loadingController: LoadingController,
    public  utils:UtilsService
    ) { }

   
  
  

  getAdminData(uid){
    firebase.database().ref('admins/'+uid).once('value',(snapshot)=>{
     console.log(snapshot.val());
     localStorage.setItem('user' ,JSON.stringify(snapshot.val()));
     this.user=snapshot.val();
     
     this.utils.dismiss();
     this.navCtrl.navigateRoot('dashboard');
    }).catch((err)=>{
    })
  }

  getEmployeeData(uid){
    firebase.database().ref('users/'+uid).once('value',(snapshot)=>{
     console.log(snapshot.val());
     this.user=snapshot.val();
     if(this.user && this.user?.uid){
      localStorage.setItem('employee' ,JSON.stringify(snapshot.val()));
      this.navCtrl.navigateRoot('udashboard');
     }else{
       this.utils.presentToast("Use Admin Login Page to Login");
       this.navCtrl.navigateForward("/admin-login");
     }
    }).catch((err)=>{
    })
  }


}
