import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxSummernoteModule } from 'ngx-summernote';
import { MentionModule } from 'angular-mentions/mention';
import { MessagesRoutingModule } from './messages.rouiting';
import { MessageService } from 'src/app/core';

import { MessagesComponent } from './pages/messages.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';

@NgModule({
  imports: [
    SharedModule,
    MessagesRoutingModule,
    BsDropdownModule.forRoot(),
    NgxSummernoteModule,
    MentionModule
  ],
  declarations: [
    MessagesComponent, 
    NewMessageComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessagesModule { }
