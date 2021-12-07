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
  public allEmployees: any=[];
  dataFetched = false;
  searchTerm:string;
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService) {
   this.allEmployees=JSON.parse(JSON.stringify(this.dataHelper.allEmployees)) 
   }
  month: string = "February";
  categories = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  ngOnInit() {
  }

  filter(){
    // debugger;
      this.allEmployees=this.dataHelper.allEmployees.filter(x=>x.FullName.toLowerCase().includes(this.searchTerm.toLowerCase()) );
 
   
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
