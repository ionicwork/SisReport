import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public alertController:AlertController,public toastController:ToastController,public loadingController:LoadingController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentLoading(message?) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
      
    });
    await loading.present();

    
  }

  dismiss(){
    this.loadingController.dismiss();
    console.log('Loading dismissed!');
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color : 'success',
    });
    toast.present();
  }

  async presentToasterror(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color : 'danger',
    });
    toast.present();
  }


}
