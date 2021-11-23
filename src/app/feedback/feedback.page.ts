import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  month: string = "February";
  categories = ['January' , 'February' , 'March' , 'April' , 'May' ,'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'] 
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  devBack(){
    this.navCtrl.pop();
  }
  gotoreportdetail(){
    this.navCtrl.navigateForward('reportdetail')
  }
}

