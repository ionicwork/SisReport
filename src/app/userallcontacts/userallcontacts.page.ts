import { Component, OnInit } from '@angular/core';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-userallcontacts',
  templateUrl: './userallcontacts.page.html',
  styleUrls: ['./userallcontacts.page.scss'],
})
export class UserallcontactsPage implements OnInit {

  constructor(public dataHelper:DatahelperService) { }

  ngOnInit() {
  }

}
