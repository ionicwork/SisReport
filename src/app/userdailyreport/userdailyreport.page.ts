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
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) { }
  
  ngOnInit() {
    console.log(this.dataHelper.months);

    this.month=this.dataHelper.months[new Date().getMonth()].month;
  }
  filter(){
    for (let index = 0; index < this.dataHelper.months.length; index++) {
      // debugger
      this.dataHelper.reportsData[index].array=this.dataHelper.months[index].array.filter(x=>x.title.toLowerCase().includes(this.searchTerm.toLowerCase())||x.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
      // debugger;
    }
   
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
