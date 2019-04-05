import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllConversationsComponent } from './pages/all-conversations/all-conversations.component';
import { ConversationDetailsComponent } from './pages/conversation-details/conversation-details.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AllConversationsComponent
            },
            {
                path: ':id',
                component: ConversationDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConversationsRoutingModule { }