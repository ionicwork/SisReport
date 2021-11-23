import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import { UtilsService } from '../provider/utils.service';
import firebase from 'firebase';
@Component({
  selector: 'app-addleaveform',
  templateUrl: './addleaveform.page.html',
  styleUrls: ['./addleaveform.page.scss'],
})
export class AddleaveformPage implements OnInit {
  leave:any=[];
  public addLeave:FormGroup ;
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService ,public _fb:FormBuilder,public utils:UtilsService) { }

  ngOnInit() {
    this.addLeave = this._fb.group({
      title: ['', Validators.compose([
        Validators.required,
      ])],
      description: ['', Validators.compose([
        Validators.required,
      ])],
    
    })
  }


  devBack(){
    this.navCtrl.pop();
  }
  
  addUserLeave(leaveData){
    leaveData.timeStamp=Number(new Date());
    leaveData.userUid=this.dataHelper.user.uid;
    leaveData.adminUid=this.dataHelper.user.adminUid;
    console.log(leaveData);
    firebase.database().ref('leaves').push(leaveData);
    this.utils.presentToast("leave Successfully Added!");
    this.utils.dismiss();
      this.navCtrl.pop();
 }
}
