import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public navCtrl:NavController,public dataHelper:DatahelperService ) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateForward('udashboard');
  }
  logout(){
    localStorage.removeItem('user');
    this.navCtrl.navigateRoot('login')
  }
}
