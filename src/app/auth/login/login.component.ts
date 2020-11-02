import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle('login-page', true);
    document.body.classList.toggle('sidebar-mini', false);
    document.body.classList.toggle('layout-fixed', false);
  }

}
