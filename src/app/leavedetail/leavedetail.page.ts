import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup  , Validators} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import firebase from 'firebase';

@Component({
  selector: 'app-leavedetail',
  templateUrl: './leavedetail.page.html',
  styleUrls: ['./leavedetail.page.scss'],
})
export class LeavedetailPage implements OnInit {
  public feedback:FormGroup;
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService , public _fb:FormBuilder,) { }

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
    
    firebase.database().ref('feedback').push(postFeedback);
  }
  devBack(){
    this.navCtrl.pop();

  }

}
