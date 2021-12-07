import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {
  month: string ;
  searchTerm:string;
  allLeaves: any;
 
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService) { }
 
  ngOnInit() {
    // debugger
    this.month=this.dataHelper.getLeaves[new Date().getMonth()].month;
    this.allLeaves=JSON.parse(JSON.stringify(this.dataHelper.getLeaves));
  }
  filter(){
    for (let index = 0; index < this.dataHelper.getLeaves.length; index++) {
      debugger
      this.allLeaves[index].array=this.dataHelper.getLeaves[index].array.filter(x=>x.title.toLowerCase().includes(this.searchTerm.toLowerCase())||x.description.toLowerCase().includes(this.searchTerm.toLowerCase())||this.dataHelper.allAdminEmployees[x.userUid]?.FullName.toLowerCase().includes(this.searchTerm.toLowerCase()) );
      // debugger;
    }
   
  }
  devBack(){
    this.navCtrl.pop();
  }
  gotoreportdetail(leave){
    this.dataHelper.leavesDetail=leave;
    // console.log(leave);
    this.navCtrl.navigateForward('leavedetail')
  }

}
