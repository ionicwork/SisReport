import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import firebase from 'firebase';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DatahelperService {
  public user: any = [];
  public employee: any = [];
  allAdminEmployees: any;
  reports: any;
  reportsData: any;
  reportDetail: any;
  leavesDetail:any;
  leavesData: any;
  allReports: any[];
  leaves: any;
  allLeaves:any[];
  feedBack:any;
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    public utils: UtilsService
  ) {
  }



  dataFetched = false;
  months: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
  { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
  { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
  getLeaves: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
  { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
  { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]



  getAdminData(uid) {
    firebase.database().ref('admins/' + uid).once('value', (snapshot) => {
      this.user = snapshot.val();
      if (this.user && this.user?.uid) {
        localStorage.setItem('user', JSON.stringify(snapshot.val()));
        localStorage.setItem('uid', snapshot.val().uid);
        this.navCtrl.navigateRoot('dashboard');
      } else {
        this.utils.presentToast("Use Employee Login Page to Login");
        this.navCtrl.navigateForward("/login");
      }
      this.utils.dismiss();
    }).catch((err) => {
    })
  }
  getAdminFirebaseData(uid) {
    // debugger;
    this.getAdminEmployees(uid);

  }
  getAdminReports() {
    this.allReports=[];
    this.months = [{ month: 'January', array: [] = [] }, { month: 'February', array: [] = [] }, { month: 'March', array: [] = [] }, { month: 'April', array: [] = [] },
    { month: 'May', array: [] = [] }, { month: 'June', array: [] = [] }, { month: 'July', array: [] = [] }, { month: 'August', array: [] = [] }, { month: 'September', array: [] = [] },
    { month: 'October', array: [] = [] }, { month: 'November', array: [] = [] }, { month: 'December', array: [] = [] }]
    this.dataFetched = false;
    var uid = localStorage.getItem('uid')
    // debugger;
    firebase.database().ref('reports').orderByChild("adminUid").equalTo(uid).once('value', (snapshot) => {
      var data = snapshot.val();
      // debugger;
      for (var key in data) {
        var month = new Date(data[key].timeStamp).getMonth();
        this.months[month].array.push(data[key]);
        this.reports.push(data[key]);
      }
      this.dataFetched = true;
      for (let index = 0; index < this.months.length; index++) {
        this.months[index].array.sort((a, b) => b.timeStamp - a.timeStamp);
      }
    })
  }
  getAdminEmployees(uid) {
    firebase.database().ref('users').orderByChild("adminUid").equalTo(uid).once('value', (snapshot) => {
      this.allAdminEmployees = snapshot.val();
      debugger;
      this.reports = [];
      this.leaves = [];
      this.getAdminReports();
      this.getAdminLeaves();
    })
  }


  getAdminLeaves() {
    this.allLeaves=[];
    this.getLeaves = [{ month: 'January', array: [] = [] }, { month: 'February', array: [] = [] }, { month: 'March', array: [] = [] }, { month: 'April', array: [] = [] },
    { month: 'May', array: [] = [] }, { month: 'June', array: [] = [] }, { month: 'July', array: [] = [] }, { month: 'August', array: [] = [] }, { month: 'September', array: [] = [] },
    { month: 'October', array: [] = [] }, { month: 'November', array: [] = [] }, { month: 'December', array: [] = [] }]
    this.dataFetched = false;
    var uid = localStorage.getItem('uid')
    // debugger;
    firebase.database().ref('leaves').orderByChild("adminUid").equalTo(uid).once('value', (snapshot) => {
      var data = snapshot.val();
      // debugger;
      for (var key in data) {
        var month = new Date(data[key].timeStamp).getMonth();
        this.getLeaves[month].array.push(data[key]);
        this.leaves.push(data[key]);
      }
      this.dataFetched = true;
      for (let index = 0; index < this.getLeaves.length; index++) {
        this.getLeaves[index].array.sort((a, b) => b.timeStamp - a.timeStamp);
      }
    })
  }


  getEmployeeData(uid) {
    firebase.database().ref('users/' + uid).once('value', (snapshot) => {
      console.log(snapshot.val());
      this.user = snapshot.val();
      if (this.user && this.user?.uid) {
        localStorage.setItem('employee', JSON.stringify(snapshot.val()));
        this.navCtrl.navigateRoot('udashboard');
      } else {
        this.utils.presentToast("Use Admin Login Page to Login");
        this.navCtrl.navigateForward("/admin-login");
      }
    }).catch((err) => {
    })
  }
  getEmployeeFirebaseData() {
    this.getEmployeeReports();
    this.getEmployeeLeaves();
  }
  getEmployeeReports() {
    this.months = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
    { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
    { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
    this.dataFetched = false;
    firebase.database().ref('reports').orderByChild("userUid").equalTo(this.user.uid).on('child_added', (snapshot) => {
      var data = snapshot.val();
      var month = new Date(data.timeStamp).getMonth();
      this.months[month].array.push(snapshot.val());
      this.months[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
      this.reportsData = this.months;
      // debugger;
      this.dataFetched = true;
    })
  }

  getEmployeeLeaves() {
    this.getLeaves = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
    { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
    { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
    this.dataFetched = false;
    firebase.database().ref('leaves').orderByChild("userUid").equalTo(this.user.uid).on('child_added', (snapshot) => {
      var data = snapshot.val();
      var month = new Date(data.timeStamp).getMonth();
      this.getLeaves[month].array.push(snapshot.val());
      this.getLeaves[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
      this.leavesData = this.getLeaves;
      // debugger;
      this.dataFetched = true;
    })
  }

  // getFeedBack() {
  //   firebase.database().ref('feedback').orderByChild('userUid').equalTo(this.user.uid).on('child_added', (snapshot) => {
  //     this.feedBack = snapshot.val();
  //     console.log(this.feedBack);
  // });
// }

}
