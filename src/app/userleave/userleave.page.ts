import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import firebase from 'firebase';
@Component({
  selector: 'app-userleave',
  templateUrl: './userleave.page.html',
  styleUrls: ['./userleave.page.scss'],
})
export class UserleavePage implements OnInit {
  month:string ;
  public leaves:any=[];
  dataFetched = false;
  months: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
  { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
  { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService) { }

  ngOnInit() {
     // console.log(this.months);
     this.month=this.months[new Date().getMonth()].month;
     // debugger
     this.leaves = [];
     this.dataFetched = false;
     // debugger
     firebase.database().ref('leaves').orderByChild("userUid").equalTo(this.dataHelper.user.uid).on('child_added', (snapshot) => {
      var data=snapshot.val();
      var month=new Date(data.timeStamp).getMonth();
      this.months[month].array.push(snapshot.val());
      // debugger
      this.months[month].array.sort((a, b) => b.timeStamp - a.timeStamp)
      this.dataFetched = true;


    })
  }

  devBack(){
    this.navCtrl.pop();
  }
  addleaveform(){
    this.navCtrl.navigateForward('addleaveform');
  }

}
