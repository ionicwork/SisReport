import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';
import { iReport } from '../Model/report';
@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.page.html',
  styleUrls: ['./addreport.page.scss'],
})
export class AddreportPage implements OnInit {
  report:any=[];
  public addReport:FormGroup ;
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService,public _fb:FormBuilder,public utils:UtilsService) { }

  ngOnInit() {
    this.addReport = this._fb.group({
      title: ['', Validators.compose([
        Validators.required,
      ])],
      description: ['', Validators.compose([
        Validators.required,
      ])],
    
    })
  }
  devBack(){
    this.navCtrl.navigateForward('userdailyreport');
  }

  addDailyReport(reportData:iReport){
    reportData.timeStamp=Number(new Date());
    reportData.userUid=this.dataHelper.user.uid;
    reportData.adminUid=this.dataHelper.user.adminUid;
    console.log(reportData);
    reportData.key=firebase.database().ref('reports').push().key;
    firebase.database().ref(`reports/${reportData.key}`).set(reportData);
    var month = new Date().getMonth();
    this.dataHelper.reportsData[month].array.push(reportData);
    this.dataHelper.reports.push(reportData);
    this.dataHelper.reportsData[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
    this.utils.presentToast("Report Successfully Added!");
    this.utils.dismiss();
      this.navCtrl.pop();
 }
 
  
}
