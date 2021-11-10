import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  register(){
     this.navCtrl.navigateForward('register');
  }
}
