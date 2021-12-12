import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormControl , FormBuilder } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import firebase from 'firebase';
import { DatahelperService } from '../provider/datahelper.service';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { UtilsService } from '../provider/utils.service';



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  public onUpdateForm:FormGroup;
  loading:any;
  constructor(
    public utils:UtilsService,
    private camera: Camera,
    public actionSheetController:ActionSheetController, 
    public _fb:FormBuilder,
    public toastController: ToastController,
    public navCtrl:NavController ,
    public getService:DatahelperService
     ) { }

    async ngOnInit() {
      this.onUpdateForm = this._fb.group({
        FullName: ['', Validators.compose([ 
          Validators.required,
          Validators.minLength(5)
        ])],
        Skills: ['', Validators.compose([ 
          Validators.required,
          Validators.minLength(5)
        ])],
        Email: ['', Validators.compose([
          Validators.required,
        ])],
        Password: ['', Validators.compose([
          Validators.required,
        ])],
        Phone: ['', Validators.compose([
          Validators.required,
        ])],
        Date: ['', Validators.compose([
          Validators.required,
        ])],
        Salary:['', Validators.compose([
          Validators.required,
        ])],
        
      })
      
    }

    async updateImage(){
      const actionSheet = await this.actionSheetController.create({
        header: 'Choose One',
        cssClass: 'my-custom-class',
        buttons: [
          {
            text: 'Camera',
            icon: 'camera-outline',
            handler: () => {
              console.log('Play clicked');
            },
          },
          {
            text: 'Gallery',
            icon: 'images-outline',
            handler: () => {
              this.getImage(1);
            },
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              this.getImage(2);
            },
          },
        ],
      });
      await actionSheet.present();
  
      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role); 
    }
    getImage(src:number){
      const options: CameraOptions = {
        quality: 30,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType:src
      }
      
      this.camera.getPicture(options).then((imageData) => {
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.uploadImage(base64Image);
      }, (err) => {
       // Handle error
      });
    }
    uploadImage(imagePath) {
      const self = this;
      this.utils.presentLoading('Uploading...');
      const storageRef = firebase.storage().ref();
      const filename = Math.floor(Date.now() / 1000);
      const imageRef = storageRef.child(`profileImages/${filename}.jpg`);
      imageRef.putString(imagePath, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
        firebase.storage().ref('profileImages/' + snapshot.metadata.name).getDownloadURL().then((url) => {
          this.getService.user.profileImage=url
          firebase.database().ref('user/'+this.getService.user.uid+'profileImage').update(this.getService.user.profileImage).then(()=>{
            this.utils.dismiss();
          })
       });
      });
    }
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Your Profile have been saved successfully.',
        duration: 2000,
        color:'success',
        position: 'top',
      });
      toast.present();
    }
    update(user){
      debugger
      firebase.database().ref('admins/'+this.getService.user.uid).update(user).then(()=>{
        user.uid=this.getService.user.uid;
        localStorage.setItem('user' ,JSON.stringify(user));
        this.presentToast();
        this.navCtrl.pop();
      }).catch((err)=>{
        
      })
      
  
    }  
    
  devBack(){
    this.navCtrl.navigateBack('employer-profile');
  }


}
