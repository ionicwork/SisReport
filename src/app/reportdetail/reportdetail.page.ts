import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.page.html',
  styleUrls: ['./reportdetail.page.scss'],
})
export class ReportdetailPage implements OnInit {
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService , public _fb:FormBuilder,) { }
  public feedback:FormGroup;
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
  Feedback(postFeedback){
    postFeedback.adminUid=this.dataHelper.user.adminUid;
    postFeedback.userUid=this.dataHelper.user.uid;
    firebase.database().ref('feedback').push(postFeedback);
  }
  devBack(){
    this.navCtrl.navigateBack('dailyreport');

  }

  // gotoreportdetail(report){
  //   this.dataHelper.reportDetail=report;
  // }

}
