import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';


@Component({
  selector: 'app-udashboard',
  templateUrl: './udashboard.page.html',
  styleUrls: ['./udashboard.page.scss'],
})
export class UdashboardPage implements OnInit {

  constructor(public navCtrl:NavController, public dataHelper:DatahelperService) { }

  ngOnInit() {
    this.dataHelper.getData();
  }

  gotoprofile(){
    this.navCtrl.navigateForward('profile');
  }

  gotodailyreport(){
    this.navCtrl.navigateForward('userdailyreport');
  }

  gotoleaveform(){
    this.navCtrl.navigateForward('userleave');
  }
  gotoreportdetail(){
    this.navCtrl.navigateForward('userprofiledetail');
  }

}
