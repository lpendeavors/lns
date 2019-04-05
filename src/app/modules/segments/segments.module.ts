import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { SegmentsRoutingModule } from './segments.routing';

import { SegmentsComponent } from './pages/segments.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    SharedModule,
    SegmentsRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [SegmentsComponent]
})
export class SegmentsModule { }
