import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../../@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule,
    SharedModule]
})
export class DashboardModule {
}
