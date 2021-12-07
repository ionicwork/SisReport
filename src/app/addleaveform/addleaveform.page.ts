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
    // debugger;
    leaveData.key=firebase.database().ref('leaves').push().key;
    firebase.database().ref(`leaves/${leaveData.key}`).set(leaveData);
    var month = new Date().getMonth();
    this.dataHelper.getLeaves[month].array.push(leaveData);
    debugger;
    this.dataHelper.leavesData.push(leaveData);
    this.dataHelper.getLeaves[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
    this.utils.presentToast("Report Successfully Added!");
    console.log(this.dataHelper.leavesData.length,"added")
    this.utils.dismiss();
      this.navCtrl.pop();
 }
}
