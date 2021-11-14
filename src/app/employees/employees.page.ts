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
  constructor(public navCtrl: NavController, public dataService: DatahelperService) { }
  month: string = "February";
  categories = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  ngOnInit() {
    this.allEmployees = [];
    this.dataFetched = false; 
    firebase.database().ref('users').orderByChild('adminUid').equalTo(this.dataService.user.uid).once('value', (snapshot) => {
      var data = snapshot.val();
      for (var key in data) {
        this.allEmployees.push(data[key]);
      }
      this.dataFetched=true;
    })
  }
  onCategoryChange(category) {
    console.log(category.detail.value);
  }
  devBack() {
    this.navCtrl.navigateBack('dashboard');
  }

  AddEmployee() {
    this.navCtrl.navigateBack('add-employee');
  }
  updateData() {
    this.navCtrl.navigateForward('update-employee')
  }
}
