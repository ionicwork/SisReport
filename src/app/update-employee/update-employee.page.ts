import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';
import firebase from 'firebase';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {
  public updateform:FormGroup;
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService , public utils:UtilsService , public _fb:FormBuilder,) { }

  async ngOnInit() {
    this.updateform = this._fb.group({
      FullName: ['', Validators.compose([ 
        Validators.required,
        Validators.minLength(5)
      ])],
      Skills: ['', Validators.compose([ 
        Validators.required,
        Validators.minLength(5)
      ])],
      Email: ['', Validators.compose([
        Validators.required,
      ])],
      Password: ['', Validators.compose([
        Validators.required,
      ])],
      Phone: ['', Validators.compose([
        Validators.required,
      ])],
      Date: ['', Validators.compose([
        Validators.required,
      ])],
      Salary:['', Validators.compose([
        Validators.required,
      ])],
      
    })
    
  }
  devBack(){
    this.navCtrl.navigateBack('employees')
  }
  updateEmployee(employeeUpdate){
    debugger
    firebase.database().ref('users/'+this.dataHelper.employeeUpdate.uid).update(employeeUpdate).then(()=>{
        employeeUpdate.uid=this.dataHelper.employeeUpdate.uid;
        localStorage.setItem('user' ,JSON.stringify(employeeUpdate));
        this.utils.presentToast('update successfully!');
        this.navCtrl.pop();
      }).catch((err)=>{
        this.utils.presentToasterror(err.message);
      })
  }
}
