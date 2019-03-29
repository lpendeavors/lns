import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentsComponent } from './pages/segments.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: SegmentsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SegmentsRoutingModule { }