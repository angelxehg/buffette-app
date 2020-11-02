import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle('login-page', false);
  }

}
