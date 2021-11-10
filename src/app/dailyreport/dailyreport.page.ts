import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.page.html',
  styleUrls: ['./dailyreport.page.scss'],
})
export class DailyreportPage implements OnInit {
  month: string = "February";
    categories = ['January' , 'February' , 'March' , 'April' , 'May' ,'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'] 
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  onCategoryChange(category){
    console.log(category.detail.value);
  }
  devBack(){
    this.navCtrl.navigateBack('dashboard');
  }
  gotoreportdetail(){
    this.navCtrl.navigateForward('reportdetail')
  }
}
