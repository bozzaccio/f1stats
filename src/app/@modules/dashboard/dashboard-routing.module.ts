import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ScheduleComponent} from "./components/schedule/schedule.component";

const DashboardRoutes: Route[] = [{
  path: '',
  component: DashboardComponent,
  children: [
    {path: 'schedule', component: ScheduleComponent},
    // {path: 'qualifying', component: null},
    // {path: 'drivers', component: null},
    // {path: 'constructors', component: null},
    // {path: 'circuit', component: null},
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
