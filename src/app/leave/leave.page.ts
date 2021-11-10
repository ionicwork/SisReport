import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {
  month: string = "February";
  categories = ['January' , 'February' , 'March' , 'April' , 'May' ,'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'] 
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateBack('dailyreport');
  }
  gotoreportdetail(){
    this.navCtrl.navigateForward('reportdetail')
  }

}
