import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';


@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.page.html',
  styleUrls: ['./reportdetail.page.scss'],
})
export class ReportdetailPage implements OnInit {
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService , public _fb:FormBuilder,public utils: UtilsService) { }
  public fb:FormGroup;
  public fb1:FormGroup;
  feedBack:any;
  public edit= false;
  async ngOnInit() {
    
     
    this.fb = this._fb.group({
      feedback: ['', Validators.compose([ 
        Validators.required,
      ])],
      
    })
    this.fb1 = this._fb.group({
      feedback: ['', Validators.compose([ 
        Validators.required,
      ])],
      
    })
    
  }

  editfeedack(){
    this.edit = ! this.edit;
  }
  Feedback(postFeedback){
    postFeedback.userUid=this.dataHelper.user.uid;
    postFeedback.timestamp=Number(new Date());
    this.dataHelper.reportDetail.feedback=postFeedback;
    firebase.database().ref(`reports/${this.dataHelper.reportDetail.key}`).set(this.dataHelper.reportDetail)
    this.utils.presentToast('FeedBack Succesfully added');
  }

//   Feedback1(postFeedback){
//     // debugger
//     postFeedback.userUid=this.dataHelper.user.uid;
//     firebase.database().ref('reports/'+this.dataHelper.reportDetail.feedback.userUid).update(postFeedback).then(()=>{
//       postFeedback.userUid=this.dataHelper.reportDetail.feedback;
//       debugger
//       localStorage.setItem('report' ,JSON.stringify(postFeedback));
//       this.utils.presentToast('update successfully!');
//       this.navCtrl.pop();
//     }).catch((err)=>{
      
//     })
// }
  
gotoChat(employee) {
  this.dataHelper.chatEmployee=employee;
  this.navCtrl.navigateForward('chat');
}

  devBack(){
    this.navCtrl.pop();

  }

  // gotoreportdetail(report){
  //   this.dataHelper.reportDetail=report;
  // }

}
