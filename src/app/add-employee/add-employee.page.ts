import { Component, OnInit } from '@angular/core';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  public onRegisterForm:FormGroup;
  constructor(
    public navCtrl:NavController,
    public _fb:FormBuilder,
    public dataHelper:DatahelperService,
    public utils:UtilsService
  ) { }

  async ngOnInit() {
    this.onRegisterForm = this._fb.group({
      FullName: ['', Validators.compose([ 
        Validators.required,
        Validators.minLength(4)
      ])],
      Skills: ['', Validators.compose([ 
        Validators.required,
        Validators.minLength(4)
      ])],
      Email: ['', Validators.compose([
        Validators.required,
      ])],
      Password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)

      ])],
      Phone: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11)
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
    this.utils.presentLoading("Creating User");
    userData.timeStamp=Number(new Date());
    firebase.auth().createUserWithEmailAndPassword(userData.Email , userData.Password).then((user)=>{
      if(firebase.auth().currentUser){
        userData.uid = firebase.auth().currentUser.uid;
        userData.adminUid=this.dataHelper.user.uid;
         this.saveUserDataAfterSignUp(userData);
      }
    }).catch(err=>{
      err;
      setTimeout(() => {
      this.utils.dismiss();
      this.utils.presentToasterror(err.message)
      }, 500);
    })
  }

  saveUserDataAfterSignUp(userData){

    firebase.database().ref( `users/${userData.uid}`).set(userData).then(()=>{
      this.dataHelper.allEmployees.push(userData);
      // debugger
      this.dataHelper.allEmployees.sort((a, b) => b.timeStamp - a.timeStamp);
      this.utils.presentToast("User Successfully Added");
      this.utils.dismiss();
      this.navCtrl.pop();
    }).catch((err)=>{
      this.utils.presentToasterror(err.message)
      this.utils.dismiss();
    })
  }

  devBack(){
    this.navCtrl.pop();
  }

}
