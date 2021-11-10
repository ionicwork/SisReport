import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addleaveform',
  templateUrl: './addleaveform.page.html',
  styleUrls: ['./addleaveform.page.scss'],
})
export class AddleaveformPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateForward('leaveform');
  }
  
}
