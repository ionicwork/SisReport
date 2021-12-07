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
  searchTerm:string;
  allReports: any;
  reports: any;
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) { }
  
  ngOnInit() {
   
  }
  ionViewWillEnter(){
    this.month=this.dataHelper.adminReports[new Date().getMonth()].month;
    this.reports=JSON.parse(JSON.stringify(this.dataHelper.reportsData))
  }
  filter(){
    for (let index = 0; index < this.dataHelper.adminReports.length; index++) {
      // debugger
        this.reports[index].array=this.dataHelper.reportsData[index].array.filter(x=>x.title.toLowerCase().includes(this.searchTerm.toLowerCase())||x.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
        
    }
    debugger;
  }

  devBack() {
    this.navCtrl.pop();
  }

  gotoaddreport() {
    this.navCtrl.navigateForward('addreport');
  }

  gotoreportdetail(report) {
    this.dataHelper.reportDetail=report;
    this.navCtrl.navigateForward('userprofiledetail');
  }

  

}
