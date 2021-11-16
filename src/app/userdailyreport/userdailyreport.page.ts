import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavComponentWithProps } from '@ionic/core';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
@Component({
  selector: 'app-userdailyreport',
  templateUrl: './userdailyreport.page.html',
  styleUrls: ['./userdailyreport.page.scss'],
})
export class UserdailyreportPage implements OnInit {
  month: string ;
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) { }
  public reports: any = [];
  dataFetched = false;
  months: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
  { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
  { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
  ngOnInit() {
    // console.log(this.months);
    this.month=this.months[new Date().getMonth()].month;
    // debugger
    this.reports = [];
    this.dataFetched = false;
    // debugger
    firebase.database().ref('reports').orderByChild("userUid").equalTo(this.dataHelper.user.uid).on('child_added', (snapshot) => {
      var data=snapshot.val();
      var month=new Date(data.timeStamp).getMonth();
      this.months[month].array.push(snapshot.val());
      // debugger
      this.months[month].array.sort((a, b) => b.timeStamp - a.timeStamp)
      this.dataFetched = true;


    })
  }

  devBack() {
    this.navCtrl.pop();
  }

  gotoaddreport() {
    this.navCtrl.navigateForward('addreport');
  }

  gotoreportdetail() {
    this.navCtrl.navigateForward('userprofiledetail');
  }

}
