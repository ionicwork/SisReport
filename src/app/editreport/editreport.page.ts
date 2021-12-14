import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';
@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.page.html',
  styleUrls: ['./editreport.page.scss'],
})
export class EditreportPage implements OnInit {

  report:any=[];
  public updaterepoer:FormGroup ;
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService,public _fb:FormBuilder,
    public toastController: ToastController,public utils:UtilsService) { }

  ngOnInit() {
    this.updaterepoer = this._fb.group({
      title: ['', Validators.compose([
        Validators.required,
      ])],
      description: ['', Validators.compose([
        Validators.required,
      ])],
    
    })
  }

  devBack(){
    this.navCtrl.pop();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Profile have been saved successfully.',
      duration: 2000,
      color:'success',
      position: 'top',
    });
    toast.present();
  }
  update(report){
    debugger
    firebase.database().ref('reports/'+this.dataHelper.reportDetail).update(report).then(()=>{
      report=this.dataHelper.reportDetail;
      debugger
      localStorage.setItem('report' ,JSON.stringify(report));
      this.presentToast();
      this.navCtrl.pop();
    }).catch((err)=>{
      
    })
    

  } 

}
