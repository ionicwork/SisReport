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
  ngOnInit() {
    this.reports=[];
    firebase.database().ref('reports').orderByChild("userUid").equalTo(this.dataHelper.user.uid).once('value',(snapshot)=>{
      var data=snapshot.val();
      for(var key in data){
        this.reports=data[key];
      }
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
