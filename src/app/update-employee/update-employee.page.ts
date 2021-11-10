import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.navigateBack('employees')
  }
  update(){
    this.navCtrl.navigateBack('employees')
  }
}
