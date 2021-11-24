import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  public allEmployees: any = [];
  dataFetched = false;
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) { }
  month: string = "February";
  categories = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  ngOnInit() {
  }
  onCategoryChange(category) {
    console.log(category.detail.value);
  }
  devBack() {
    this.navCtrl.pop();
  }

  AddEmployee() {
    this.navCtrl.navigateBack('add-employee');
  }
  updateData() {
    this.navCtrl.navigateForward('update-employee')
  }
}
