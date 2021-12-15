import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup  , Validators} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import firebase from 'firebase';

@Component({
  selector: 'app-leavedetail',
  templateUrl: './leavedetail.page.html',
  styleUrls: ['./leavedetail.page.scss'],
})
export class LeavedetailPage implements OnInit {
  public feedback:FormGroup;
  public edit= false;
  constructor(public navCtrl:NavController , public alertController:AlertController, public dataHelper:DatahelperService , public _fb:FormBuilder,) { }

  async ngOnInit() {
    firebase.database().ref('feedback').on('value', (snapshot) => {
      var data=snapshot.val();
      console.log(data);
    });
     
    this.feedback = this._fb.group({
      feedback: ['', Validators.compose([ 
        Validators.required,
      ])],
      
    })
    
  }

  showAlert(report) {
    this.alertController.create({
      header: 'Leave Accepted or Rejected?',
      mode:'ios',
      buttons: [
        {
          text: 'Accect ',
          cssClass: 'my-custom-class',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Reject',
          handler: () => {
            
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
  gotoChat(employee) {
    this.dataHelper.chatEmployee=employee;
    this.navCtrl.navigateForward('chat');
  }
  Feedback(postFeedback){
    postFeedback.userUid=this.dataHelper.user.uid;
    postFeedback.timestamp=Number(new Date());
    this.dataHelper.leavesDetail.feedback=postFeedback;
    firebase.database().ref(`leaves/${this.dataHelper.leavesDetail.key}`).set(this.dataHelper.leavesDetail)
  }
  devBack(){
    this.navCtrl.pop();

  }


  editfeedack(){
    this.edit = ! this.edit;
  }
}
