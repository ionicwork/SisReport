import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { UtilsService } from '../provider/utils.service';

@Component({
  selector: 'app-chatcontact',
  templateUrl: './chatcontact.page.html',
  styleUrls: ['./chatcontact.page.scss'],
})
export class ChatcontactPage implements OnInit {
  public chats: any = [];
searchTerm:any;
  constructor(public navCtrl: NavController, public dataHelper: DatahelperService,public utils:UtilsService) { }

  ngOnInit() {
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
