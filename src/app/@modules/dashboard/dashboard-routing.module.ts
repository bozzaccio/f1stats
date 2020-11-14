import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const DashboardRoutes: Route[] = [{
  path: '',
  component: DashboardComponent
}];


@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
