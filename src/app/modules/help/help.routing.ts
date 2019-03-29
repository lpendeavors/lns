import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './pages/help.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HelpComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HelpRoutingModule { }