import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollsRoutingModule } from './payrolls-routing.module';
import { PayrollsComponent } from './payrolls.component';


@NgModule({
  declarations: [
    PayrollsComponent
  ],
  imports: [
    CommonModule,
    PayrollsRoutingModule
  ]
})
export class PayrollsModule { }
