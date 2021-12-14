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

  constructor(public navCtrl: NavController, public dataHelper: DatahelperService, public alertController: AlertController, public utils: UtilsService) { }
  ind:number
  ngOnInit() {
  }
  devBack() {
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

  showAlerteditreport() {
    this.alertController.create({
      header: 'Are you sure to Edit this report?',

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
           this.navCtrl.navigateForward(['/editreport']);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }


  deletereport(report) {
    firebase.database().ref(`reports/${report.key}`).remove().then(()=>{
      for (let index = 0; index < this.dataHelper.reportsData.length; index++) {
        var ind = this.dataHelper.reportsData[index].array.findIndex(x => x.timeStamp == report.timeStamp)
        // debugger
        if (ind >= 0) {
          this.dataHelper.reportsData[index].array.splice(ind,1)
          debugger
          break;
        }
      }
    })
    this.dataHelper.reports.push(report);
    this.navCtrl.pop();
    this.utils.presentToast('Report deleted successfully');
  }


}
