import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';


@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.page.html',
  styleUrls: ['./employer-profile.page.scss'],
})
export class EmployerProfilePage implements OnInit {

  constructor(public navCtrl:NavController , public dataHelper:DatahelperService ) { }

  ngOnInit() {
  }
  update(){
    this.navCtrl.navigateForward('update-profile')
  }
   logout(){
    localStorage.clear();
    this.navCtrl.navigateRoot('admin-login')
  }
  devBack(){
    this.navCtrl.navigateBack('dashboard');
  }
}
