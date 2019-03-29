import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { SegmentsRoutingModule } from './segments.routing';

import { SegmentsComponent } from './pages/segments.component';

@NgModule({
  imports: [
    SharedModule,
    SegmentsRoutingModule
  ],
  declarations: [SegmentsComponent]
})
export class SegmentsModule { }
