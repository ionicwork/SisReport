import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public navCtrl:NavController,
    public dataHelper:DatahelperService,
    public webview:WebView,
    public camera:Camera,
    public alertController:AlertController
    ) { }

  ngOnInit() {
    // debugger;
    var uid=localStorage.getItem('uid')
    // debugger;
    this.dataHelper.getAdminFirebaseData(uid);
  }
   
  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit:false,
    correctOrientation:true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  galleryOptions: CameraOptions = {
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    quality: 100,
    allowEdit:true,
    correctOrientation:true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  employee(){
  this.navCtrl.navigateForward('employees')
  }
  dailyreport(){
    this.navCtrl.navigateForward('dailyreport')
  }
  leave(){
    this.navCtrl.navigateForward('leave')
  }
  feedback(){
    this.navCtrl.navigateForward('feedback')
  }
  employerProfile(){
    this.navCtrl.navigateForward('employer-profile')
  }
 
}
