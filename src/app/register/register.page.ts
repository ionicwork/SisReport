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
  admins: any=[];
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
        ])],
        Phone: ['', Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.required,
        ])],
        Date: ['', Validators.compose([
          Validators.required,
        ])],
        Salary:['', Validators.compose([
          Validators.required,
        ])],
        
      })
      this.admins=[];
      firebase.database().ref('adminPool').once('value',(snapshot)=>{
        var data=snapshot.val();
        for(var key in data){
          this.admins.push(data[key]);
        }
      })
      // this.addNewAdmin();
    }
    // addNewAdmin(){
    //   var data={email:"test@admin.com"}
    //   firebase.database().ref('adminPool').push(data).then(()=>{
    //     this.utils.presentToast("Created");
    //   })
    // }
 

  SignUp(userData){
    this.utils.presentLoading("Please Wait");
    var admin=this.admins.filter(x=>x.email==userData.Email)
    if(admin[0]){
      // debugger;
      firebase.auth().createUserWithEmailAndPassword(userData.Email , userData.Password).then((user)=>{
        if(firebase.auth().currentUser){
          userData.uid =firebase.auth().currentUser.uid;
          this.saveUserDataAfterSignUp(userData);
        }
      }).catch(err=>{
        err;
        setTimeout(() => {
        this.utils.dismiss();
        this.utils.presentToasterror(err.message)
        }, 500);
      })
    }else{
      setTimeout(() => {
        this.utils.dismiss();
        this.utils.presentToast("Sorry, You can't SignUp")
        }, 500);
    }
    
  }

  saveUserDataAfterSignUp(userData){
    firebase.database().ref(`admins/${userData.uid}`).set(userData).then(()=>{
       this.dataHelper.getAdminData(userData.uid);
       this.utils.dismiss();
    }).catch((err)=>{
      this.utils.presentLoading();
    })
  }
  

  devBack(){
    this.navCtrl.navigateBack('admin-login');
  }

 



}
