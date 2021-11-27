import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.page.html',
  styleUrls: ['./dailyreport.page.scss'],
})
export class DailyreportPage implements OnInit {
  month: string ;
  searchTerm:string;
  allReports: any;
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService) { }

  ngOnInit() {
    // var uid =this.dataHelper.months[10].array[0].userUid
    // var name=this.dataHelper.allAdminEmployees[this.dataHelper.months[10].array[0].userUid].FullName
    // debugger
    this.month=this.dataHelper.adminReports[new Date().getMonth()].month;
    this.allReports=JSON.parse(JSON.stringify(this.dataHelper.adminReports));
  }
  filter(){
    for (let index = 0; index < this.dataHelper.adminReports.length; index++) {
      // debugger
      this.allReports[index].array=this.dataHelper.adminReports[index].array.filter(x=>x.title.toLowerCase().includes(this.searchTerm.toLowerCase())||x.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
      // debugger;
    }
   
  }

  onCategoryChange(category){
    console.log(category.detail.value);
  }
  devBack(){
    this.navCtrl.navigateBack('dashboard');
  }
  gotoreportdetail(report){
    this.dataHelper.reportDetail=report;
    console.log(report);
    this.navCtrl.navigateForward('reportdetail')
  }
}
