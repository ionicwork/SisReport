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
  public fb:FormGroup;
  feedBack:any;
  async ngOnInit() {
    
     
    this.fb = this._fb.group({
      feedback: ['', Validators.compose([ 
        Validators.required,
      ])],
      
    })
    
  }
  Feedback(postFeedback){
    postFeedback.userUid=this.dataHelper.user.uid;
    postFeedback.timestamp=Number(new Date());
    this.dataHelper.reportDetail.feedback=postFeedback;
    firebase.database().ref(`reports/${this.dataHelper.reportDetail.key}`).set(this.dataHelper.reportDetail)
  }


  
  devBack(){
    this.navCtrl.pop();

  }

  // gotoreportdetail(report){
  //   this.dataHelper.reportDetail=report;
  // }

}
