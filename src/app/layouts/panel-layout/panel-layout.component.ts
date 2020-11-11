import { Component, Input, OnInit } from '@angular/core';
import { MenuIcon, MenuItem } from 'src/app/models/menu';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {

  @Input() title = '';

  menus: MenuItem[] = [
    {
      title: 'Inicio',
      link: '/home',
      icon: { from: 'fas', name: 'fa-home' }
    },
    {
      title: 'Vender',
      link: '/sales',
      icon: { from: 'fas', name: 'fa-cash-register' }
    },
    {
      title: 'Surtir',
      link: '/supplies',
      icon: { from: 'fas', name: 'fa-parachute-box' }
    },
    {
      title: 'Inventariar',
      link: '/inventories',
      icon: { from: 'fas', name: 'fa-calculator' }
    },
    {
      title: 'Productos',
      link: '/products',
      icon: { from: 'fas', name: 'fa-boxes' }
    }
  ];

  constructor(private auth: AuthService) { }

  icon = (icon: MenuIcon) => `${icon.from} ${icon.name}`;

  logout = () => this.auth.logout();

  ngOnInit(): void {
    document.body.classList.toggle('login-page', false);
  }

}
