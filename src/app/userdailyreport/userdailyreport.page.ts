import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavComponentWithProps } from '@ionic/core';

@Component({
  selector: 'app-userdailyreport',
  templateUrl: './userdailyreport.page.html',
  styleUrls: ['./userdailyreport.page.scss'],
})
export class UserdailyreportPage implements OnInit {
  month:string="Febuary"
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  devBack(){
    this.navCtrl.navigateForward('udashboard');
  }
  
  gotoaddreport(){
    this.navCtrl.navigateForward('addreport');
  }

  gotoreportdetail(){
    this.navCtrl.navigateForward('userprofiledetail');
  }

}
