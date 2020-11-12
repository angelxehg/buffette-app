import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  next = '/home';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const params = this.route.snapshot.queryParams;
    if (params.then) {
      this.next = params.then;
    }
  }

  login(): void {
    this.auth.login().then(() => {
      this.router.navigateByUrl(this.next);
    });
  }

  ngOnInit(): void {
  }

}
