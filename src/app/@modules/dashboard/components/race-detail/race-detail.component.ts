import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../@core/interfaces/state.interface";
import {getLoading} from "../../store/selectors/dashboard.selector";
import {ActivatedRoute} from "@angular/router";
import {DetailService} from "../../services/detail.service";
import {IBaseResponse} from "../../../../@core/interfaces/base-service.interface";
import {IApiConfigParameters} from "../../../../@core/interfaces/api-config-parameters";
import * as dashboardAction from '../../store/actions/dashboard.actions';
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  public data: any;
  public first: any;
  public second: any;
  public third: any;
  public displayedColumns: string[] = ['driverName', 'driverNumber', 'driverTeamName', 'finalPosition', 'gridPosition', 'status'];

  private _subscription: Subscription = new Subscription();

  constructor(private _store: Store<IAppState>,
              private _route: ActivatedRoute,
              private _detailService: DetailService,
              private _actions$: Actions) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    const currentId = this._route.snapshot.paramMap.get('id');
    const year = this._route.snapshot.queryParams.year;

    const payload: IApiConfigParameters = {
      year,
      raceNumber: parseInt(currentId),
      showResult: true
    }

    this._subscription.add(
      this._actions$.pipe(
        ofType(dashboardAction.loadRaceDetailsSuccess)
      ).subscribe((response: IBaseResponse) => {
          this.data = this._detailService.mapResponse(response);
          this.first = this.data.result[0];
          this.second = this.data.result[1];
          this.third = this.data.result[2];
          this.data.result.splice(0, 3);
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        })
    );

    this._store.dispatch(dashboardAction.loadRaceDetails(payload));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
