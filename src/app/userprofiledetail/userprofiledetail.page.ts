import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-userprofiledetail',
  templateUrl: './userprofiledetail.page.html',
  styleUrls: ['./userprofiledetail.page.scss'],
})
export class UserprofiledetailPage implements OnInit {

  constructor(public navCtrl:NavController, public dataHelper:DatahelperService ) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateBack('udashboard');
  }

  // gotoreportdetail(report){
  //   this.dataHelper.reportDetail=report;
  // }
}
