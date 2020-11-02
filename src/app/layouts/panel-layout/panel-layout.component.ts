import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle('login-page', false);
    document.body.classList.toggle('sidebar-mini', true);
    document.body.classList.toggle('layout-fixed', true);
  }

}
