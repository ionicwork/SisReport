import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-userprofiledetail',
  templateUrl: './userprofiledetail.page.html',
  styleUrls: ['./userprofiledetail.page.scss'],
})
export class UserprofiledetailPage implements OnInit {

  constructor(public navCtrl:NavController ) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateBack('udashboard');
  }
}
