import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlinepaymentRoutingModule } from './onlinepayment-routing.module';
import { OnlinepaymentComponent } from './onlinepayment.component';


@NgModule({
  declarations: [
    OnlinepaymentComponent
  ],
  imports: [
    CommonModule,
    OnlinepaymentRoutingModule
  ]
})
export class OnlinepaymentModule { }
