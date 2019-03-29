import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './pages/groups.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: GroupsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupsRoutingModule { }