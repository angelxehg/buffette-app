import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    component: PanelLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'sales',
        loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule),
      },
      {
        path: 'supplies',
        loadChildren: () => import('./pages/supplies/supplies.module').then(m => m.SuppliesModule),
      },
      {
        path: 'inventories',
        loadChildren: () => import('./pages/inventories/inventories.module').then(m => m.InventoriesModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
