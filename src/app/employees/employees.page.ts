import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  constructor( public navCtrl:NavController) { }
  month: string = "February";
    categories = ['January' , 'February' , 'March' , 'April' , 'May' ,'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'] 
  ngOnInit() {
  }
  onCategoryChange(category){
    console.log(category.detail.value);
  }
  devBack(){
     this.navCtrl.navigateBack('dashboard');
  }
  
  AddEmployee(){
    this.navCtrl.navigateBack('register');
  }
  updateData(){
    this.navCtrl.navigateForward('update-employee')
  }
}
