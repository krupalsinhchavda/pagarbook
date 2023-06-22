import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
      { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) },
      { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
      { path: 'payrolls', loadChildren: () => import('./payrolls/payrolls.module').then(m => m.PayrollsModule) },
      { path: 'cashbook', loadChildren: () => import('./cashbook/cashbook.module').then(m => m.CashbookModule) },
      { path: 'onlinepayment', loadChildren: () => import('./onlinepayment/onlinepayment.module').then(m => m.OnlinepaymentModule) },
      { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
      { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },

    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
