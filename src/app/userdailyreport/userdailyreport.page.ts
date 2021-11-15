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
  month:string="Febuary"
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService) { }
  public reports:any=[];
  dataFetched = false;
  
  ngOnInit() {
    this.reports=[];
    this.dataFetched = false; 
    debugger
    firebase.database().ref('reports').orderByChild("userUid").equalTo(this.dataHelper.user.uid).on('child_added',(snapshot)=>{
      // console.log(this.reports);
      this.reports.push(snapshot.val());
      this.dataFetched=true;
    })
  }

  devBack(){
    this.navCtrl.navigateForward('udashboard');
  }
  
  gotoaddreport(){
    this.navCtrl.navigateForward('addreport');
  }

  gotoreportdetail(){
    this.navCtrl.navigateForward('userprofiledetail');
  }

}
