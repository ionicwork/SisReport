import { Component, OnInit } from '@angular/core';
import { Camera , CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { DatahelperService } from '../provider/datahelper.service';
import firebase from 'firebase';


@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.page.html',
  styleUrls: ['./employer-profile.page.scss'],
})
export class EmployerProfilePage implements OnInit {
  photo:any= '';
  constructor(public navCtrl:NavController , public dataHelper:DatahelperService,
    public webview:WebView,
    public camera:Camera,
    public alertCtrl:AlertController ) { }

  ngOnInit() {
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
 async choosePhoto(){
    let alertbox = await this.alertCtrl.create({
        header: "Choose From",
        buttons:[
          {
            text:'camera',
            handler:()=>{
              this.camera.getPicture(this.cameraOptions).then(res=>{
                let finalImg = this.webview.convertFileSrc(res);
                this.photo=finalImg;
                this.uploadImage(finalImg);
              })
            }
          },
          {
            text:'gallery',
            handler:()=>{
              this.camera.getPicture(this.galleryOptions).then(res=>{
                let finalImg = this.webview.convertFileSrc(res);
                this.photo=finalImg;
                this.uploadImage(finalImg);
              })
            }
          },
        ],
    })
    await alertbox.present()
  }

  uploadImage(image){
    let radomname = this.randomnumberGenerator();
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('images/' +radomname);
      this.toDataURL(image , (dataUrl)=>{
        imageRef.putString(dataUrl , 'data_url').then(snapshot=>{
          imageRef.getDownloadURL().then(url=>{
            console.log(url);
            this.photo=url;
          })
        }, err =>{
          reject(err);
        }
        )
      })
    })

  }

  toDataURL(url , callback){
       var xhr = new XMLHttpRequest();
       xhr.onload = function(){
          var reader = new FileReader();
          reader.onloadend = function(){
            callback(reader.result)
          }
          reader.readAsDataURL(xhr.response);
       };
       xhr.open('GET', url);
       xhr.responseType='blob';
       xhr.send();
  }

  randomnumberGenerator(){
    var text ="";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

     for( var i=0 ; i<10 ; i++)
     text += possible.charAt(Math.floor(Math.random() *possible.length))
     return text;
  }

  
  update(){
    this.navCtrl.navigateForward('update-profile')
  }
   logout(){
    localStorage.clear();
    this.navCtrl.navigateRoot('admin-login')
  }
  devBack(){
    this.navCtrl.navigateBack('dashboard');
  }
}
