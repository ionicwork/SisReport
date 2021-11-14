import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.page.html',
  styleUrls: ['./addreport.page.scss'],
})
export class AddreportPage implements OnInit {
  report:any=[];
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateForward('userdailyreport');
  }
  addReport(){
    this.report.timeStamp=Number(new Date());
    this.report.userUid=this.dataHelper.user.uid;
    firebase.database().ref('reports').push(this.report);

  }
  
}
