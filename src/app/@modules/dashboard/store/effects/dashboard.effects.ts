import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as dashboardAction from '../actions/dashboard.actions';
import {catchError, map, mergeMap} from "rxjs/operators";
import {ScheduleService} from "../../services/schedule.service";
import {of} from "rxjs";
import {IBaseResponse} from "../../../../@core/interfaces/base-service.interface";

@Injectable({providedIn: "root"})
export class DashboardEffects {

  loadRaceSchedule = createEffect(() => this._actions.pipe(
    ofType(dashboardAction.loadRaceSchedule),
    mergeMap(payload => this._scheduleService.execute(payload)
      .pipe(
        map((response: IBaseResponse) => {
          return dashboardAction.loadRaceScheduleSuccess(response)
        }),
        catchError(_ => {
          return of(dashboardAction.loadRaceScheduleFailed())
        })
      ))
  ));

  constructor(private _actions: Actions,
              private _scheduleService: ScheduleService) {
  }

}
