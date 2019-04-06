import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MessageService, CompanyService, GroupService, SegmentService, Group, Segment, CustomContactField } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit, OnDestroy {

  private companySubscription: Subscription;
  private groupListSubscription: Subscription;
  private segmentListSubscription: Subscription;

  messageForm: FormGroup;
  messageError: string;

  groups: Group[] = [];
  segments: Segment[] = [];

  config = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    toolbar: [
      ['font', ['fontname', 'fontsize', 'color' ,'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear', 'style0', 'ul', 'ol', 'paragraph']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  };

  fields: Array<{ id: string, name: string }> = [
    { id: 'firstName', name: 'First Name' },
    { id: 'lastName', name: 'Last Name'}
  ];

  get smsTextLength(): number {
    return this.messageForm.get('smsText').value.length;
  }

  get sanitizedHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.messageForm.get('emailHtml').value);
  }

  get isSMS(): boolean {
    return this.messageForm.get('type').value === 'sms';
  }

  get isEmail(): boolean {
    return this.messageForm.get('type').value === 'Email';
  }

  constructor(private sanitizer: DomSanitizer, private message: MessageService, private router: Router,
    private company: CompanyService, private group: GroupService, private segment: SegmentService) { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      id: new FormControl('new', Validators.required),
      type: new FormControl('sms', Validators.required),
      name: new FormControl('', Validators.required),
      smsText: new FormControl('', Validators.maxLength(300)),
      emailHtml: new FormControl('')
    });
    this.groupListSubscription = this.group.list.subscribe(groups => this.groups = groups);
    this.segmentListSubscription = this.segment.list.subscribe(segments => this.segments = segments);
    this.companySubscription = this.company.getCompanyById('1').subscribe(company => {
      if (company.customFields) {
        company.customFields.forEach(field => {
          this.fields.push({ id: field.id, name: field.name });
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.companySubscription) {
      this.companySubscription.unsubscribe();
    }
    if (this.groupListSubscription) {
      this.groupListSubscription.unsubscribe();
    }
    if (this.segmentListSubscription) {
      this.segmentListSubscription.unsubscribe();
    }
  }

  addTemplateField(field: { id: string, name: string }) {
    if (this.isSMS) {
      let messageText = this.messageForm.get('smsText').value;
      messageText = `${messageText} {${field.id}}`;
      this.messageForm.controls['smsText'].setValue(messageText);
    } else if (this.isEmail) {
      let emailText = this.messageForm.get('emailHtml').value;
      emailText = `${emailText} {${field.id}}`;
      this.messageForm.controls['emailHtml'].setValue(emailText);
    }
  }

  saveMessage(publish: boolean) {
    this.messageError = null;
    if (this.isSMS) {
      this.messageForm.controls['emailHtml'].setValue('');
    } else if (this.isEmail) {
      this.messageForm.controls['smsText'].setValue('');
    }
    this.message.create(this.messageForm.value, publish)
      .then(() => this.router.navigate['/messages'])
      .catch(err => this.messageError = err);
  }

}
