import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.page.html',
  styleUrls: ['./reportdetail.page.scss'],
})
export class ReportdetailPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateBack('dailyreport');
  }

}
