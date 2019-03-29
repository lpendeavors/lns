import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

import { SharedModule } from 'src/app/shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
