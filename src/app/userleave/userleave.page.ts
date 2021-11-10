import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-userleave',
  templateUrl: './userleave.page.html',
  styleUrls: ['./userleave.page.scss'],
})
export class UserleavePage implements OnInit {
  month:string="Febuary"
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  devBack(){
    this.navCtrl.navigateForward('udashboard');
  }
  addleaveform(){
    this.navCtrl.navigateForward('addleaveform');
  }

}
