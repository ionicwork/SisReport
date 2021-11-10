import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-udashboard',
  templateUrl: './udashboard.page.html',
  styleUrls: ['./udashboard.page.scss'],
})
export class UdashboardPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
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
