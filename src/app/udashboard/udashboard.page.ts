import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import Chart from 'chart.js/auto';
import { StatusBar } from '@capacitor/status-bar';
// import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-udashboard',
  templateUrl: './udashboard.page.html',
  styleUrls: ['./udashboard.page.scss'],
})
export class UdashboardPage implements AfterViewInit, OnInit {
  @ViewChild('chartCanvas') chartCanvas : ElementRef;

  month: string ;
  searchTerm:string;
  allReports: any;
  reports: any;
  data : any = [];
  canvasChart : Chart;
  colorCodes:any[]= [{name:"Red" , code:"#E74C3C" },{name:"yellow", code:"#F4D03F" },{name:"Green" , code:"#58D68D" },{name:"Light gray" , code:"#F4F6F7 " }]
  constructor(public navCtrl:NavController, public dataHelper:DatahelperService) { }


  async ngAfterViewInit() {
    let stocks = await fetch("assets/data/stocks.json").then(resp => resp.json());
    stocks = stocks[0];
    let opens = [];
    let closes = [];
    let highs = [];
    let lows = [];
    let volumes = [];
    let labels = [];
    Object.keys(stocks).forEach((key, index, array) => {
      if (index > 2) {
        return true;
      }
      labels.push(key);
      opens.push( this.addRandom(stocks[key].open) );
      closes.push( this.addRandom(stocks[key].close) );
      highs.push( this.addRandom(stocks[key].high) );
      lows.push( this.addRandom(stocks[key].low) );
      volumes.push(stocks[key].volume);
    });
    
    this.data = {
      labels: labels,
      datasets: [{
        label: 'Open',
        data: opens,
        backgroundColor: 'rgba(255, 199, 132, 0.2)',
        borderColor: 'rgba(255, 99, 32, 0.8)',
        borderWidth: 2
      },{
        label: 'High',
        data: highs,
        backgroundColor: 'rgba(55, 99, 132, 0.4)',
        borderColor: 'rgba(55, 99, 132, 0.8)',
        borderWidth: 2
      }, {
        label: 'Low',
        data: lows,
        backgroundColor: 'rgba(155, 99, 132, 0.4)',
        borderColor: 'rgba(155, 99, 132, 0.8)',
        borderWidth: 2
      }, {
        label: 'Close',
        data: closes,
        backgroundColor: 'rgba(55, 99, 232, 0.4)',
        borderColor: 'rgba(55, 99, 132, 0.8)',
        borderWidth: 2
      }]
    };
    this.changeChart({detail: {
      value : 'bar'
    }});
  }
  changeChart( event: any ) {
    const type = event.detail.value || 'bar';
    if ( this.canvasChart ) {
      this.canvasChart.destroy();
    }
    this.canvasChart = new Chart(this.chartCanvas.nativeElement, {
      type: type,
      data: this.data,
      options: {
        indexAxis: 'x'
      }
    });
  }
  addRandom( points: any ) : number {
    return Number(points) - Number( Math.floor((Math.random() * 100) + 1) );
  }
 

  ngOnInit() {
    StatusBar.setOverlaysWebView({overlay:false})
    this.dataHelper.getEmployeeFirebaseData();
  }
  ionViewWillEnter(){
    this.month=this.dataHelper.adminReports[new Date().getMonth()].month;
  }
  changeBackgroundColorOfStatusBar(event){
    var colorCode=event.target.value;
    StatusBar.setBackgroundColor({color:colorCode});
  }
  gotoprofile(){
    this.navCtrl.navigateForward('profile');
  }

  gotodailyreport(){
    this.navCtrl.navigateForward('userdailyreport');
  }

  gotoleaveform(){
    this.navCtrl.navigateForward('userleave');
  }

  gotochatcontact(){
    this.navCtrl.navigateForward('chatcontact');
  }
  gotoreportdetail(report) {
    this.dataHelper.reportDetail=report;
    this.navCtrl.navigateForward('userprofiledetail');
  }
  openChat(){
    this.dataHelper.chatEmployee=JSON.parse(localStorage.getItem('admin'));
    this.navCtrl.navigateForward(['/chat']);
  }
}
