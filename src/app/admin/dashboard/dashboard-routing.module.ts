import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component'
import { DetailsAttedanceComponent } from './details-attedance/details-attedance.component';
import { OverallComponent } from './overall/overall.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'detailsAttedance', component: DetailsAttedanceComponent },
  { path: 'overall', component: OverallComponent },
  { path: 'loan-details', component: LoanDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
