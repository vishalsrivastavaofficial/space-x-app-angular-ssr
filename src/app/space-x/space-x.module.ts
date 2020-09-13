import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceXRoutingModule } from './space-x-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardDataService } from './dashboard/dashboard-data.service';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SpaceXRoutingModule,
    SharedModule
  ],
  providers: [
    DashboardDataService
  ]
})
export class SpaceXModule { }
