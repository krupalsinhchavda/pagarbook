import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlinepaymentComponent } from './onlinepayment.component';

const routes: Routes = [
  {
    path: '', component: OnlinepaymentComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinepaymentRoutingModule { }
