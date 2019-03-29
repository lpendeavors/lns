import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsOverviewComponent } from './pages/reviews-overview/reviews-overview.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ReviewsOverviewComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ReviewsRoutingModule { }