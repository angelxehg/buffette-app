import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralCardLayoutComponent } from './central-card-layout/central-card-layout.component';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CentralCardLayoutComponent,
    PanelLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CentralCardLayoutComponent,
    PanelLayoutComponent
  ]
})
export class LayoutsModule { }
