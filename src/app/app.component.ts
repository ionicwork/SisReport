import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DatahelperService } from './provider/datahelper.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform:Platform ,public getService:DatahelperService 
    ,public navCtrl:NavController) {
   this.platform.ready().then(() => {
    var data=JSON.parse(localStorage.getItem('user'))
    // debugger;
    if(data?.uid){
      this.getService.user=data;
      this.navCtrl.navigateRoot(['/dashboard']);
    }else{ 
      this.platform.ready().then(() => {
      data=JSON.parse(localStorage.getItem('employee'))
      if(data?.uid){
        this.getService.user=data;
        this.navCtrl.navigateRoot(['/udashboard']);
      }else{
       this.navCtrl.navigateRoot(['/welcome']);
      }
     });
    }
   });
   


   



 }
}
