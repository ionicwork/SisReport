import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import  firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {
  public onLoginForm:FormGroup ;
  Email:any;
  Password:any;
  constructor(public navCtrl:NavController ,
    private _fb:FormBuilder,
    public dataHelper:DatahelperService,
    public utils:UtilsService
    ) { }

    async ngOnInit() {
      this.onLoginForm = this._fb.group({
        Email: ['', Validators.compose([
          Validators.required,
        ])],
        Password: ['', Validators.compose([
          Validators.required,
        ])],
      
      })
      // If using a custom driver:
      // await this.storage.defineDriver(MyCustomDriver)
    }


   Login(userData){
      this.utils.presentLoading("Please Wait");
      console.log('reponse=' , userData.uid);
      firebase.auth().signInWithEmailAndPassword(userData.Email,userData.Password).then(res=>{
        // console.log('reponse=' , res.uid);
        this.dataHelper.getAdminData(res.user.uid);
      }).catch(err=>{
        err;
        setTimeout(() => {
        this.utils.dismiss();
        this.utils.presentToast(err.message)
        }, 500);
      })
     

 

}
  register(){
     this.navCtrl.navigateForward('register');
  }
  
  login(){
    this.navCtrl.navigateForward('login');
  }
}
