import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-adminchat',
  templateUrl: './adminchat.page.html',
  styleUrls: ['./adminchat.page.scss'],
})
export class AdminchatPage implements OnInit {

  constructor(public popover: PopoverController) { }

  ngOnInit() {
  }

}
