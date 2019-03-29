import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { ConversationsRoutingModule } from './conversations.routing';

import { AllConversationsComponent } from './pages/all-conversations/all-conversations.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ConversationDetailsComponent } from './pages/conversation-details/conversation-details.component';

@NgModule({
  imports: [
    SharedModule,
    ConversationsRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [AllConversationsComponent, ConversationDetailsComponent]
})
export class ConversationsModule { }
