import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralCardLayoutComponent } from './central-card-layout/central-card-layout.component';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule({
  declarations: [
    CentralCardLayoutComponent,
    PanelLayoutComponent,
    ContentHeaderComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CentralCardLayoutComponent,
    PanelLayoutComponent,
    ContentHeaderComponent,
    ContentComponent,
  ]
})
export class LayoutsModule { }
