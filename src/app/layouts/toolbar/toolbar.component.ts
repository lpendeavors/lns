import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'lns-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
