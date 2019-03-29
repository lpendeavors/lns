import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MessagesRoutingModule } from './messages.rouiting';

import { MessagesComponent } from './pages/messages.component';

@NgModule({
  imports: [
    SharedModule,
    MessagesRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
