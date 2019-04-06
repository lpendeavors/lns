import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  private messageListSubscription: Subscription;

  messages: Message[] = [];

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.messageListSubscription = this.message.list.subscribe(list => this.messages = list);
  }

  ngOnDestroy() {
    if (this.messageListSubscription) {
      this.messageListSubscription.unsubscribe();
    }
  }

  messageTypeLabel(type: string): string {
    switch (type) {
      case 'sms':
        return 'Text Message';
      case 'Email':
        return 'Email';
      default:
        return '';
    }
  }

}
