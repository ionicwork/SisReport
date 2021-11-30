import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-chatcontact',
  templateUrl: './chatcontact.page.html',
  styleUrls: ['./chatcontact.page.scss'],
})
export class ChatcontactPage implements OnInit {

  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) { }

  ngOnInit() {
  }
  gotoChat(employee) {
    this.dataHelper.chatEmployee=employee;
    this.navCtrl.navigateForward('chat');
  }
}
