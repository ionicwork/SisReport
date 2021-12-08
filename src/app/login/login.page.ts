import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import  firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm:FormGroup ;
  constructor(public navCtrl: NavController,
    public _fb:FormBuilder,
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
        this.dataHelper.getEmployeeData(res.user.uid);
        this.utils.dismiss();
        
      }).catch(err=>{
        err;
        setTimeout(() => {
        this.utils.dismiss();
        this.utils.presentToast(err.message)
        }, 500);
      })
     

 

}

  dashboard(){
    this.navCtrl.navigateForward('udashboard');
  }
  // register(){
  //   this.navCtrl.navigateForward('admin-login')
  // }

  admin(){
    this.navCtrl.navigateForward('admin-login')
  }
  
}
