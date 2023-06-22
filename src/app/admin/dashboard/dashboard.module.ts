import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailsAttedanceComponent } from './details-attedance/details-attedance.component';
import { DashboardComponent } from './dashboard.component';
import { OverallComponent } from './overall/overall.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { DetailsAttedancefilterComponent } from './details-attedancefilter/details-attedancefilter.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DashboardComponent,
    DetailsAttedanceComponent,
    OverallComponent,
    LoanDetailsComponent,
    DetailsAttedancefilterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
