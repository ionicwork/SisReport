import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DatahelperService } from '../provider/datahelper.service';

import { IonContent } from '@ionic/angular';
import firebase from 'firebase';
import { NewMessage } from '../Model/message';
import { UtilsService } from '../provider/utils.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  user: any;
  recipient: any;
  chatKey: string;
  chats: any = [];
  chatRef: any;
  public newMessage = new NewMessage();
  @ViewChild(IonContent, { read: IonContent, static: false }) content: IonContent;

  constructor(public dataHelper: DatahelperService,
    public zone: NgZone,public utils:UtilsService) { }

  ngOnInit() {
    this.getChatUser();
  }
  getChatUser() {
    this.user = this.dataHelper.user;
    this.recipient = this.dataHelper.chatEmployee;

    if (this.user.uid < this.recipient.uid) {
      this.chatKey = this.user.uid + '-' + this.recipient.uid;
    } else {
      this.chatKey = this.recipient.uid + '-' + this.user.uid;
    }

    // debugger
    this.newMessage.senderId = this.user.uid;
    this.newMessage.recipientId = this.recipient.uid;
    this.getChats();
  }
  getChats() {
    firebase.database().ref().child(`chats/${this.chatKey}/messages`).on('child_added', (snapshot) => {
      var data = snapshot.val();
      // debugger;
      this.chats.push(data);
      this.scrollToBottom();
    })
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
  sendMessage() {
    if (!this.newMessage.message.trim()) {
     this.utils.presentToast("Sorry! you can't send empty message" );
      return;
    }
    this.newMessage.timestamp = firebase.database.ServerValue.TIMESTAMP as any;
    const updates = {};
    const key = firebase.database().ref().child(`chats/${this.chatKey}/messages`).push().key;
    updates[`/chats/${this.chatKey}/messages/${key}`] = this.newMessage;
    firebase.database().ref().update(updates).then(() => {
      var data = { lastMessage: '', uid: '', lastMessageTime: 0,adminKey:'',employeeKey:'' };
      data.lastMessage = this.newMessage.message;
      data.uid = this.user.uid;
      data.lastMessageTime = this.newMessage.timestamp;
      data.adminKey=this.user.uid;
      data.employeeKey=this.recipient.uid;
      if(this.chats.length!=0){
        delete data.employeeKey
        delete data.adminKey
      }
      firebase.database().ref('chats/' + this.chatKey).update(data);
      this.newMessage.message = null;
    });
  }
  ionViewDidLeave(){
    this.dataHelper.getAdminChats();
  }
}
