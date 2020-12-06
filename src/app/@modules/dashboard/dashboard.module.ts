import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../../@shared/shared.module';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [DashboardComponent, ScheduleComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DashboardModule {
}
