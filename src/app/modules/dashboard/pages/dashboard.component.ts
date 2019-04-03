import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, AuthService } from 'src/app/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { AddEditProfileComponent } from '../../../shared/components/add-edit-profile/add-edit-profile.component';

@Component({
  selector: 'lns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private userIdSubscription: Subscription;
  private userProfileSubscription: Subscription;

  constructor(private user: UserService, private auth: AuthService, private modalService: BsModalService) { }

  ngOnInit() {
    this.userIdSubscription = this.auth.userId.subscribe(id => {
      this.userProfileSubscription = this.user.profile(id).subscribe(profile => {
        if (!profile.firstName && !profile.lastName) {
          this.modalService.show(AddEditProfileComponent, { 
            initialState: {profile},
            ignoreBackdropClick: true
          });
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
    if (this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
  }

}
