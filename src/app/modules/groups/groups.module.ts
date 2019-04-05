import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { GroupsRoutingModule } from './groups.routing';

import { GroupsComponent } from './pages/groups.component';
import { GroupService } from 'src/app/core';

@NgModule({
  imports: [
    SharedModule,
    GroupsRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [GroupsComponent],
  providers: [GroupService]
})
export class GroupsModule { }
