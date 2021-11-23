import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';

@Component({
  selector: 'app-userprofiledetail',
  templateUrl: './userprofiledetail.page.html',
  styleUrls: ['./userprofiledetail.page.scss'],
})
export class UserprofiledetailPage implements OnInit {

  constructor(public navCtrl:NavController, public dataHelper:DatahelperService , public alertController:AlertController , public utils:UtilsService) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.pop();
  }

  showAlert(report) {
    this.alertController.create({
      header: 'Are you sure to detele this report?',
     
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.deletereport(report);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  deletereport(report){
    console.log(report);
    // firebase.database().ref('reports').remove(report);
    // this.navCtrl.pop();
    firebase.database().ref('reports').orderByChild('timeStamp').equalTo(report.timeStamp).once('value' , (snapShot)=>{
      var data=snapShot.val();
      for(var key in data){
        data.key
        firebase.database().ref(`reports/${key}`).remove();
      }
    } )
    this.navCtrl.pop();
    this.utils.presentToast('Report deleted successfully');
  }

  
}
