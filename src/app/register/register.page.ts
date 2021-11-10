import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm:FormGroup;
  loading:any;
  constructor(
    public navCtrl:NavController,
    public _fb:FormBuilder,
    public getService:DatahelperService,
    public utils:UtilsService
    ) { }

    async ngOnInit() {
      this.onRegisterForm = this._fb.group({
        FullName: ['', Validators.compose([ 
          Validators.required,
          Validators.minLength(7)
        ])],
        Skills: ['', Validators.compose([ 
          Validators.required,
          Validators.minLength(5)
        ])],
        Email: ['', Validators.compose([
          Validators.required,
        ])],
        Password: ['', Validators.compose([
          Validators.required,
        ])],
        Phone: ['', Validators.compose([
          Validators.required,
        ])],
        Date: ['', Validators.compose([
          Validators.required,
        ])],
        Salary:['', Validators.compose([
          Validators.required,
        ])],
        
      })
      
    }

 

  SignUp(userData){
    this.utils.presentLoading("Please Wait");
    firebase.auth().createUserWithEmailAndPassword(userData.Email , userData.Password).then((user)=>{
      if(firebase.auth().currentUser){
        userData.uid =firebase.auth().currentUser.uid;
        this.saveUserDataAfterSignUp(userData);
      }
    }).catch(err=>{
      err;
      setTimeout(() => {
      this.utils.dismiss();
      this.utils.presentToast(err.message)
      }, 500);
    })
  }

  saveUserDataAfterSignUp(userData){
    firebase.database().ref(`users/${userData.uid}`).set(userData).then(()=>{
       this.getService.getUserData(userData.uid);
       this.utils.dismiss();
    }).catch((err)=>{
      this.utils.presentLoading();
    })
  }
  





  devBack(){
    this.navCtrl.navigateBack('welcome');
  }

 



}
