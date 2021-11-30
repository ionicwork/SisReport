import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adminchatcontact',
  templateUrl: './adminchatcontact.page.html',
  styleUrls: ['./adminchatcontact.page.scss'],
})
export class AdminchatcontactPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  gotoadminChat(){
    this.navCtrl.navigateForward('adminchat');
  }
}
