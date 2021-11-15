import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import firebase from 'firebase';
@Component({
  selector: 'app-userleave',
  templateUrl: './userleave.page.html',
  styleUrls: ['./userleave.page.scss'],
})
export class UserleavePage implements OnInit {
  month:string="Febuary"
  public leaves:any=[];
  dataFetched = false;
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService) { }

  ngOnInit() {
    this.leaves=[];
    this.dataFetched = false; 
    firebase.database().ref('leaves').orderByChild("userUid").equalTo(this.dataHelper.user.uid).once('value',(snapshot)=>{
      // console.log(this.reports);
      var data=snapshot.val();
      for(var key in data){
        this.leaves.push(data[key]);

      }
      this.dataFetched=true;
    })
  }

  devBack(){
    this.navCtrl.navigateForward('udashboard');
  }
  addleaveform(){
    this.navCtrl.navigateForward('addleaveform');
  }

}
