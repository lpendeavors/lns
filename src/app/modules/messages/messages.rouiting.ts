import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './pages/messages.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MessagesComponent
            },
            {
                path: 'new',
                component: NewMessageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MessagesRoutingModule { }