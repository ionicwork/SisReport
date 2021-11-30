import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(public navCtrl: NavController,
    public dataHelper: DatahelperService,
    private elementRef: ElementRef,
    public webview: WebView,
    public camera: Camera,
    public alertController: AlertController
  ) { }
  ngOnInit() {
    // debugger;
    var uid = localStorage.getItem('uid')
    // debugger;
    this.dataHelper.getAdminFirebaseData(uid);
    
  }
  ionViewDidEnter(){
    this.doughnutChartMethod();
  }
  // @ViewChild('barChart') bar;

  doughnutChart: any;
  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    quality: 100,
    allowEdit: true,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  employee() {
    this.navCtrl.navigateForward('employees')
  }
  dailyreport() {
    this.navCtrl.navigateForward('dailyreport')
  }
  leave() {
    this.navCtrl.navigateForward('leave')
  }
  feedback() {
    this.navCtrl.navigateForward('feedback')
  }
  employerProfile() {
    this.navCtrl.navigateForward('employer-profile')
  }

  clickCHart(){
    this.dataHelper.percentageChart();

  }

  bars: any;
  colorArray: any;
  
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Reports', 'Leaves', 'Feedback'],
        datasets: [{
          label: '# of Votes',
          data: [33.3, 33.3, 33.3],
          backgroundColor: [
            'rgba(248, 41, 41, 0.9)',
            'rgba(136, 157, 209, 0.9)',
            'rgba(45, 239, 45, 0.9)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#889dd1',
            '#36A2EB',
          ]
        }]
      }
    });
  }
}
