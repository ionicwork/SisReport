import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'update-employee',
    loadChildren: () => import('./update-employee/update-employee.module').then( m => m.UpdateEmployeePageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
  },
  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'reportdetail',
    loadChildren: () => import('./reportdetail/reportdetail.module').then( m => m.ReportdetailPageModule)
  },
  {
    path: 'dailyreport',
    loadChildren: () => import('./dailyreport/dailyreport.module').then( m => m.DailyreportPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'udashboard',
    loadChildren: () => import('./udashboard/udashboard.module').then( m => m.UdashboardPageModule)
  },
  {
    path: 'addleaveform',
    loadChildren: () => import('./addleaveform/addleaveform.module').then( m => m.AddleaveformPageModule)
  },
  {
    path: 'addreport',
    loadChildren: () => import('./addreport/addreport.module').then( m => m.AddreportPageModule)
  },
  {
    path: 'userdailyreport',
    loadChildren: () => import('./userdailyreport/userdailyreport.module').then( m => m.UserdailyreportPageModule)
  },
  {
    path: 'userleave',
    loadChildren: () => import('./userleave/userleave.module').then( m => m.UserleavePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'userprofiledetail',
    loadChildren: () => import('./userprofiledetail/userprofiledetail.module').then( m => m.UserprofiledetailPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'employer-profile',
    loadChildren: () => import('./employer-profile/employer-profile.module').then( m => m.EmployerProfilePageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'userleavedetail',
    loadChildren: () => import('./userleavedetail/userleavedetail.module').then( m => m.UserleavedetailPageModule)
  },
  {
    path: 'leavedetail',
    loadChildren: () => import('./leavedetail/leavedetail.module').then( m => m.LeavedetailPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chatcontact',
    loadChildren: () => import('./chatcontact/chatcontact.module').then( m => m.ChatcontactPageModule)
  },
  {
    path: 'adminchatcontact',
    loadChildren: () => import('./adminchatcontact/adminchatcontact.module').then( m => m.AdminchatcontactPageModule)
  },
  {
    path: 'adminchat',
    loadChildren: () => import('./adminchat/adminchat.module').then( m => m.AdminchatPageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'userallcontacts',
    loadChildren: () => import('./userallcontacts/userallcontacts.module').then( m => m.UserallcontactsPageModule)
  },  {
    path: 'editreport',
    loadChildren: () => import('./editreport/editreport.module').then( m => m.EditreportPageModule)
  },
  {
    path: 'editleave',
    loadChildren: () => import('./editleave/editleave.module').then( m => m.EditleavePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
