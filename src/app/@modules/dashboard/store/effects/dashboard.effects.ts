import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import * as dashboardAction from '../actions/dashboard.actions';
import {mergeMap} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class DashboardEffects {

  // loadRaceSchedule = createEffect(() => this._actions.pipe(
  //   ofType(dashboardAction.loadRaceSchedule),
  //   mergeMap(payload => this.)
  // ));


  constructor(private _actions: Actions,
              private _router: Router) {
  }

}
