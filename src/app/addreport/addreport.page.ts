import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.page.html',
  styleUrls: ['./addreport.page.scss'],
})
export class AddreportPage implements OnInit {
  report:any=[];
  public addReport:FormGroup ;
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService,public _fb:FormBuilder,) { }

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

  addDailyReport(report){
    debugger;
    report.timeStamp=Number(new Date());
    report.userUid=this.dataHelper.user.uid;
    console.log(report);
    firebase.database().ref('reports').push(this.report);
 
 }
  
}
