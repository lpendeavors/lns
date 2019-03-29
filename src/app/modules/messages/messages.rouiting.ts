import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './pages/messages.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: MessagesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MessagesRoutingModule { }