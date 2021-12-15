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

  // showAlerteditleave() {
  //   this.alertController.create({
  //     header: 'Are you sure to Edit this Leave?',
     
  //     buttons: [
  //       {
  //         text: 'No',
  //         handler: () => {
  //           this.alertController.dismiss();
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           this.navCtrl.navigateForward('editleave');
  //         }
  //       }
  //     ]
  //   }).then(res => {
  //     res.present();
  //   });
  // }

  gotoeditleave(){
    this.navCtrl.navigateForward('editleave');
  }
  deleteLeaves(leave){
    // firebase.database().ref('reports').remove(report);
    // this.navCtrl.pop();
    debugger
    firebase.database().ref('leaves').orderByChild('timeStamp').equalTo(leave.timeStamp).once('value' , (snapShot)=>{
      var data=snapShot.val();
      debugger
      for(var key in data){
        data.key
        firebase.database().ref(`leaves/${key}`).remove();
        var month = new Date().getMonth();
        this.dataHelper.getLeaves[month].array.remove(key);
        // debugger;
        this.dataHelper.leavesData.remove(key);
      }
    } )
    this.navCtrl.pop();
    this.utils.presentToast('Report deleted successfully');
  }

  

}




