import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';
import firebase from 'firebase';
@Component({
  selector: 'app-chatcontact',
  templateUrl: './chatcontact.page.html',
  styleUrls: ['./chatcontact.page.scss'],
})
export class ChatcontactPage implements OnInit {
  public chats: any = [];
searchTerm:any;
  constructor( public alertController: AlertController, public navCtrl: NavController, public dataHelper: DatahelperService,public utils:UtilsService) { }

  ngOnInit() {
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

  deletereport(report) {
    // debugger
    firebase.database().ref(`chats/${report.messages}`).remove().then(()=>{
      debugger
      for (let index = 0; index < this.dataHelper.allAdminEmployees.length; index++) {
        var ind = this.dataHelper.allAdminEmployees[index].array.findIndex(x => x.timeStamp == report.timeStamp)
        // debugger
        if (ind >= 0) {
          this.dataHelper.allAdminEmployees[index].array.splice(ind,1)
          debugger
          break;
        }
      }
    })
    this.navCtrl.pop();
    this.utils.presentToast('Report deleted successfully');
  }
  gotoChat(employee) {
    this.dataHelper.chatEmployee=employee;
    this.navCtrl.navigateForward('chat');
  }

  filter(){
    for (let index = 0; index < this.dataHelper.allAdminEmployees.length; index++) {
      
      console.log(this.dataHelper.allAdminEmployees[index].array)
   debugger
      this.chats[index].array=this.dataHelper.allAdminEmployees[index].array.filter(x=>x.FullName.toLowerCase().includes(this.searchTerm.toLowerCase()));
      debugger;
    }
  }


  
}
