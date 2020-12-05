import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../../@shared/shared.module';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {MatCardModule} from '@angular/material/card';
import {StoreModule} from '@ngrx/store';
import {DashboardReducer} from './store/reducers/dashboard.reducer';
import {EffectsModule} from "@ngrx/effects";
import {DashboardEffects} from "./store/effects/dashboard.effects";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [DashboardComponent, ScheduleComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    // StoreModule.forRoot(DashboardReducer),
    // EffectsModule.forRoot([DashboardEffects]),
    MatButtonModule
  ]
})
export class DashboardModule {
}
