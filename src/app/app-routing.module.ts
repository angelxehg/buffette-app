import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'app',
    redirectTo: '/app/home',
    pathMatch: 'full'
  },
  {
    path: 'app/inventory',
    loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule),
  },
  {
    path: 'app/home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'app/products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
