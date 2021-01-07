import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {RaceDetailComponent} from "./components/race-detail/race-detail.component";

const DashboardRoutes: Route[] = [{
  path: '',
  component: DashboardComponent,
  children: [
    {path: 'schedule', component: ScheduleComponent},
    {path: 'schedule/:id', component: RaceDetailComponent}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
