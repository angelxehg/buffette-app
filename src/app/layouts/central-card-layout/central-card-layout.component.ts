import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-card-layout',
  templateUrl: './central-card-layout.component.html',
  styleUrls: ['./central-card-layout.component.scss']
})
export class CentralCardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle('login-page', true);
    document.body.classList.toggle('sidebar-mini', false);
    document.body.classList.toggle('layout-fixed', false);
  }

}
