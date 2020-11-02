import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle('login-page', false);
    document.body.classList.toggle('sidebar-mini', true);
    document.body.classList.toggle('layout-fixed', true);
  }

}
