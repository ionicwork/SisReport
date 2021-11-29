import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushnotificationService {

  constructor() { }
  // register(){
  //   PushNotifications.register();

  //   PushNotifications.addListener('registration', (token: Token) => {
  //     alert('Push registration success, token: ' + token.value);
  //   });
  //   PushNotifications.addListener('registrationError', (error: any) => {
  //     alert('Error on registration: ' + JSON.stringify(error));
  //   });
  //   PushNotifications.addListener(
  //     'pushNotificationReceived',
  //     (notification: PushNotificationSchema) => {
  //       alert('Push received: ' + JSON.stringify(notification));
  //     },
  //   );

  //   PushNotifications.addListener(
  //     'pushNotificationActionPerformed',
  //     (notification: ActionPerformed) => {
  //       alert('Push action performed: ' + JSON.stringify(notification));
  //     },
  //   );
  // }
}
