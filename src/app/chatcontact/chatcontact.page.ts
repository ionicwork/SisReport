import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chatcontact',
  templateUrl: './chatcontact.page.html',
  styleUrls: ['./chatcontact.page.scss'],
})
export class ChatcontactPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  gotoChat(){
 this.navCtrl.navigateForward('chat');
  }
}
