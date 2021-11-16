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
    ) {
      
     }

    dataFetched = false;
    months: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
    { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
    { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
  
  getData(){
    this.getReports()
  }

  getAdminData(uid){
    firebase.database().ref('admins/'+uid).once('value',(snapshot)=>{
     console.log(snapshot.val());
     this.user=snapshot.val();
     if(this.user && this.user?.uid){
      localStorage.setItem('user' ,JSON.stringify(snapshot.val()));
      this.getData();
      this.navCtrl.navigateRoot('dashboard');
     }else{
       this.utils.presentToast("Use Employee Login Page to Login");
       this.navCtrl.navigateForward("/login");
     }
     this.utils.dismiss();
    }).catch((err)=>{
    })
  }
  getReports(){
    this.dataFetched = false;
    // debugger
    firebase.database().ref('reports').orderByChild("userUid").equalTo(this.user.uid).on('child_added', (snapshot) => {
      var data=snapshot.val();
      var month=new Date(data.timeStamp).getMonth();
      this.months[month].array.push(snapshot.val());
      // debugger
      this.months[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
      // debugger;
      this.dataFetched = true;
    })
  }
  getEmployeeData(uid){
    firebase.database().ref('users/'+uid).once('value',(snapshot)=>{
     console.log(snapshot.val());
     this.user=snapshot.val();
     if(this.user && this.user?.uid){
      localStorage.setItem('employee' ,JSON.stringify(snapshot.val()));
      this.navCtrl.navigateRoot('udashboard');
      this.getData();
     }else{
       this.utils.presentToast("Use Admin Login Page to Login");
       this.navCtrl.navigateForward("/admin-login");
     }
    }).catch((err)=>{
    })
  }


}
