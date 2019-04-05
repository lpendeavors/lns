import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GroupService, Group } from 'src/app/core';

import { AddEditGroupComponent } from 'src/app/shared/components/add-edit-group/add-edit-group.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {
  
  private groupsListSubscription: Subscription;
  private groups: Group[];
  filteredGroups: Group[];
  pagedGroups: Group[];
  
  searchText: string;

  paginationRotate: boolean = true;
  pageSize: number = 20;
  maxSize: number = 5;

  constructor(private group: GroupService, private modalService: BsModalService) { }

  ngOnInit() {
    this.groupsListSubscription = this.group.list
      .subscribe(groups => this.groups = this.filteredGroups = groups);
  }

  ngOnDestroy() {
    if (this.groupsListSubscription) {
      this.groupsListSubscription.unsubscribe();
    }
  }

  filterGroups() {
    if (this.searchText){
      const searchString = this.searchText.toLowerCase();
      this.filteredGroups = this.groups.filter(group => {
        let isMatch = group.name.toLowerCase().indexOf(searchString) > -1;
        if (isMatch) return group;
      });
    } else {
      this.filteredGroups = this.groups;
    }
  }

  addGroup(): void {
    const group: Group = { id: '', name: '' };
    const initialState = {
      groupToEdit: group,
      addGroup: true
    };
    this.modalService.show(AddEditGroupComponent, {initialState});
  }

  editGroup(group: Group): void {
    const initialState = {
      groupToEdit: group,
      editGroup: true
    };
    this.modalService.show(AddEditGroupComponent, {initialState});
  }

  pageChanged(page: number) {
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.setPagedGroups(start, end);
  }

  sendEmail(group: Group) {
    console.log(`Send email to ${group.name}`);
  }

  sendSMS(group: Group) {
    console.log(`Send SMS to ${group.name}`);
  }

  private setPagedGroups(start: number, end: number) {
    this.pagedGroups = this.filteredGroups.slice(start, end);
  }

}
