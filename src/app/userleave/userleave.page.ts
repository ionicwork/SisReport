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
  month: string ;
  searchTerm:string;
  public leaves:any=[];
  dataFetched = false;
  // months: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
  // { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
  // { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
  constructor(public navCtrl:NavController,public dataHelper:DatahelperService) { }

  ngOnInit() {
    // console.log(this.months);

    this.month=this.dataHelper.getLeaves[new Date().getMonth()].month;
  }
  filter(){
    for (let index = 0; index < this.dataHelper.getLeaves.length; index++) {
      // debugger
      this.dataHelper.reportsData[index].array=this.dataHelper.getLeaves[index].array.filter(x=>x.title.toLowerCase().includes(this.searchTerm.toLowerCase())||x.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
      // debugger;
    }
   
  }

  devBack(){
    this.navCtrl.pop();
  }
  addleaveform(){
    this.navCtrl.navigateForward('addleaveform');
  }
  gotoreportdetail(leave) {
    this.dataHelper.leavesDetail=leave;
    this.navCtrl.navigateForward('userleavedetail');
  }

}
