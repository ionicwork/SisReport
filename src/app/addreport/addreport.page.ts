import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.page.html',
  styleUrls: ['./addreport.page.scss'],
})
export class AddreportPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateForward('userdailyreport');
  }
  
}
