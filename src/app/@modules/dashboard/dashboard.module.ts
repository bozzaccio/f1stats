import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../../@shared/shared.module';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DashboardComponent, ScheduleComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ]
})
export class DashboardModule {
}
