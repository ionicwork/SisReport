import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';
import firebase from 'firebase';

@Component({
  selector: 'app-userleavedetail',
  templateUrl: './userleavedetail.page.html',
  styleUrls: ['./userleavedetail.page.scss'],
})
export class UserleavedetailPage implements OnInit {

  constructor(public navCtrl:NavController, public dataHelper:DatahelperService , public alertController:AlertController , public utils:UtilsService) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.pop();
  }

  showAlert(leave) {
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
            this.deleteLeaves(leave);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  deleteLeaves(leave){
    // firebase.database().ref('reports').remove(report);
    // this.navCtrl.pop();
    firebase.database().ref('leaves').orderByChild('timeStamp').equalTo(leave.timeStamp).once('value' , (snapShot)=>{
      var data=snapShot.val();
      for(var key in data){
        data.key
        firebase.database().ref(`leaves/${key}`).remove();
      }
    } )
    this.navCtrl.pop();
    this.utils.presentToast('Report deleted successfully');
  }

  

}
