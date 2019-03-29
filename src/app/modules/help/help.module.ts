import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { HelpRoutingModule } from './help.routing';

import { HelpComponent } from './pages/help.component';

@NgModule({
  imports: [
    SharedModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
