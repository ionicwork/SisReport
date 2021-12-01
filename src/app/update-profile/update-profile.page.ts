import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  public onUpdateForm:FormGroup;
  loading:any;
  constructor( 
    public _fb:FormBuilder,
    public toastController: ToastController,
    public navCtrl:NavController ,
    public getService:DatahelperService
     ) { }

    async ngOnInit() {
      this.onUpdateForm = this._fb.group({
        FullName: ['', Validators.compose([ 
          Validators.required,
          Validators.minLength(5)
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

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Your Profile have been saved successfully.',
        duration: 2000,
        color:'success',
        position: 'top',
      });
      toast.present();
    }
    update(user){
      debugger
      firebase.database().ref('admins/'+this.getService.user.uid).update(user).then(()=>{
        user.uid=this.getService.user.uid;
        localStorage.setItem('user' ,JSON.stringify(user));
        this.presentToast();
        this.navCtrl.pop();
      }).catch((err)=>{
        
      })
      
  
    }  
  devBack(){
    this.navCtrl.navigateBack('employer-profile');
  }


}
