import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public navCtrl:NavController,
    public getService:DatahelperService
    ) { }

  ngOnInit() {
  }
  
  employee(){
  this.navCtrl.navigateForward('employees')
  }
  dailyreport(){
    this.navCtrl.navigateForward('dailyreport')
  }
  leave(){
    this.navCtrl.navigateForward('leave')
  }
  feedback(){
    this.navCtrl.navigateForward('feedback')
  }
  employerProfile(){
    this.navCtrl.navigateForward('employer-profile')
  }
 
}
