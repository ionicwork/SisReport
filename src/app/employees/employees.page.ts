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
  public allEmployeeshj: any=[];
  dataFetched = false;
  searchTerm:string;
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) { }
  month: string = "February";
  categories = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  ngOnInit() {
  }

  filter(){
    for (let index = 0; index < this.dataHelper.allEmployees.length; index++) {
      
 
      // debugger
      this.allEmployeeshj[index]=this.dataHelper.allEmployees.filter(x=>this.dataHelper.allEmployees[x.userUid]?.FullName.toLowerCase().includes(this.searchTerm.toLowerCase()) );
      // debugger;
    }
   
  }
  onCategoryChange(category) {
    console.log(category.detail.value);
  }
  devBack() {
    this.navCtrl.pop();
  }

  AddEmployee() {
    this.navCtrl.navigateForward('add-employee');
  }
  updateData(user) {
    this.dataHelper.employeeUpdate = user;
    this.navCtrl.navigateForward('update-employee')
  }
}
