import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { GroupsRoutingModule } from './groups.routing';

import { GroupsComponent } from './pages/groups.component';

@NgModule({
  imports: [
    SharedModule,
    GroupsRoutingModule
  ],
  declarations: [GroupsComponent]
})
export class GroupsModule { }
