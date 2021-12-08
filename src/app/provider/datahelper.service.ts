import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import firebase from 'firebase';
// import { totalmem } from 'os';
import { iReport } from '../Model/report';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DatahelperService {
  public user: any = [];
  public employee: any = [];
  allAdminEmployees: any=[];
  reports: any=[];
  reportsData: any;
  recipient: any;
  reportDetail: any;
  chatname: any;
  leavesDetail:any;
  leavesData: any;
  allReports: any=[];
  leaves: any;
  allLeaves:any[];
  feedBack:any = [];
  allEmployees: any=[];
  totalPercentage:any;
  reportChart:any;
  leaveChart:any;
  chats: any;
  chatEmployee: any={};
  employeeUpdate:any=[];
  postFeed:any[];
  
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    public utils: UtilsService
  ) {
  }



  dataFetched = false;
  adminReports: any = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
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
        localStorage.setItem('admin',JSON.stringify(this.user));
          if (localStorage.getItem('deviceToken')) {
            const token: string = localStorage.getItem('deviceToken');
            const tokens: Array<any> = this.user.deviceTokens || [];
            if (tokens.indexOf(token) < 0) {
              tokens.push(token);
              firebase.database().ref(`users/${this.user.uid}/deviceTokens`).set(tokens);
            }
          }
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
    this.adminReports = [{ month: 'January', array: [] = [] }, { month: 'February', array: [] = [] }, { month: 'March', array: [] = [] }, { month: 'April', array: [] = [] },
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
        this.adminReports[month].array.push(data[key]);
        this.allReports.push(data[key]);
      }
      this.dataFetched = true;
      for (let index = 0; index < this.adminReports.length; index++) {
        // debugger
        this.adminReports[index].array.sort((a, b) => b.timeStamp - a.timeStamp);
      }
    })
  }
  getAdminEmployees(uid) {
    this.allEmployees=[];
    firebase.database().ref('users').orderByChild("adminUid").equalTo(uid).once('value', (snapshot) => {
      this.allAdminEmployees = snapshot.val();
      // debugger
      for(var key in this.allAdminEmployees){
        this.allEmployees.push(this.allAdminEmployees[key])
        // debugger
      }
      // debugger;
      this.leaves = [];
      this.getAdminReports();
      this.getAdminLeaves();
      this.getAdminChats();
    })
  }
  getAdminChats(){
    this.chats=[];
    // debugger
    firebase.database().ref(`chats/`).orderByChild('adminKey').equalTo(this.user.uid).once('value',(snapshot)=>{
      var data=snapshot.val();
      for(var key in data){
        this.chats.push(data[key]);
      }
     
      this.chats.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
      
      // debugger
    })
  }


  getAdminLeaves() {
    this.leaves=[];
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
        firebase.database().ref(`admins/${this.user.adminUid}`).once('value',(snapshot)=>{
          var admin=snapshot.val();
          localStorage.setItem('admin',JSON.stringify(admin));
          if (localStorage.getItem('deviceToken')) {
            const token: string = localStorage.getItem('deviceToken');
            const tokens: Array<any> = admin.deviceTokens || [];
            if (tokens.indexOf(token) < 0) {
              tokens.push(token);
              firebase.database().ref(`users/${admin.uid}/deviceTokens`).set(tokens);
            }
          }
        })
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
    this.reports = [];
    this.reportsData = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
    { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
    { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
    this.dataFetched = false;
    firebase.database().ref('reports').orderByChild("userUid").equalTo(this.user.uid).once('value', (snapshot) => {
      var data = snapshot.val();
      for(var key in data){
        var month = new Date(data[key].timeStamp).getMonth();
        this.reports.push(data[key]);
        // debugger
        this.reportsData[month].array.push(data[key]);
      }
      for (let month = 0; month < 12; month++) {
        this.reportsData[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
      }
      
      // debugger;
      this.dataFetched = true;
    })
  }

  getEmployeeLeaves() {
    this.leavesData=[]
    this.getLeaves = [{ month: 'January', array: [] }, { month: 'February', array: [] }, { month: 'March', array: [] }, { month: 'April', array: [] },
    { month: 'May', array: [] }, { month: 'June', array: [] }, { month: 'July', array: [] }, { month: 'August', array: [] }, { month: 'September', array: [] },
    { month: 'October', array: [] }, { month: 'November', array: [] }, { month: 'December', array: [] }]
    this.dataFetched = false;
    firebase.database().ref('leaves').orderByChild("userUid").equalTo(this.user.uid).once('value', (snapshot) => {
      // var data = snapshot.val();
      // var month = new Date(data.timeStamp).getMonth();
      // this.getLeaves[month].array.push(snapshot.val());
      // this.getLeaves[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
      // this.leavesData.push(this.getLeaves);
      // debugger;
      // this.dataFetched = true;
      var data = snapshot.val();
      for(var key in data){
        var month = new Date(data[key].timeStamp).getMonth();
        this.leavesData.push(data[key]);
        // debugger
        this.getLeaves[month].array.push(data[key]);
      }
      for (let month = 0; month < 12; month++) {
        this.getLeaves[month].array.sort((a, b) => b.timeStamp - a.timeStamp);
      }
      
      // debugger;
      this.dataFetched = true;
    })
    
  }


  percentageChart(){
    this.totalPercentage =( this.allReports?.length   + this.leaves?.length)
    console.log(this.totalPercentage)

     this.reportChart = Math.round(((  this.allReports?.length )/(this.totalPercentage)) * 100);
     console.log(this.reportChart)

     this.leaveChart =  Math.round(((  this.leaves?.length )/(this.totalPercentage)) * 100);
     console.log(this.leaveChart)
  }

}
