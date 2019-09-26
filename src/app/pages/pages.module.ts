import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { Charts1Component } from './charts1/charts1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementComponent } from '../components/increment/increment.component';
import { ChartsComponent } from '../components/charts/charts.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Charts1Component,
    PagesComponent,
    IncrementComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Charts1Component,
    PagesComponent
  ]
})
export class PagesModule { }
