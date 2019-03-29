import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { ReviewsRoutingModule } from './reviews.routing';

import { ReviewsOverviewComponent } from './pages/reviews-overview/reviews-overview.component';

@NgModule({
  imports: [
    SharedModule,
    ReviewsRoutingModule
  ],
  declarations: [ReviewsOverviewComponent]
})
export class ReviewsModule { }
