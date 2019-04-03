import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserService, AuthService } from 'src/app/core';

import { DashboardComponent } from './pages/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class DashboardModule { }
