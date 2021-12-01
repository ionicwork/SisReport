import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  constructor(public dataHelper:DatahelperService,public navCtrl:NavController) { }

  ngOnInit() {
  }
  gotoChat(user) {
    console.log(user);
   
    this.dataHelper.chatEmployee=user;
    console.log(user);
    // debugger
    this.navCtrl.navigateForward('chat');
  }
}
