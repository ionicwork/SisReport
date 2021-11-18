import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.page.html',
  styleUrls: ['./reportdetail.page.scss'],
})
export class ReportdetailPage implements OnInit {
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService) { }

  ngOnInit() {
   
  }
  devBack(){
    this.navCtrl.navigateBack('dailyreport');
  }

  // gotoreportdetail(report){
  //   this.dataHelper.reportDetail=report;
  // }

}
