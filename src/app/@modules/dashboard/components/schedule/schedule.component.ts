import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ScheduleService} from "../../services/schedule.service";
import {IApiConfigParameters} from "../../../../@core/interfaces/api-config-parameters";
import {IRace} from "../../../../@shared/interfaces/race.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../../../@core/interfaces/state.interface";
import * as dashboardAction from '../../store/actions/dashboard.actions';
import {Observable, Subscription} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['raceName', 'circuit', 'locality', 'date'];
  public dataSource = new MatTableDataSource<IRace>();
  public isLoading$: Observable<boolean>;

  private _subscription: Subscription;

  constructor(private _scheduleService: ScheduleService,
              private _store: Store<IAppState>,
              private _actions$: Actions) {
  }

  ngOnInit(): void {
    const payload: IApiConfigParameters = {
      year: "current"
    }

    this.isLoading$ = this._store.select(state => state.isLoading);

    this._subscription = this._actions$.pipe(
      ofType(dashboardAction.loadRaceScheduleSuccess)
    ).subscribe(data => {
      this.dataSource = new MatTableDataSource<IRace>(this._scheduleService.mapResponse(data).races);
      this.dataSource.paginator = this.paginator;
    });

    this._store.dispatch(dashboardAction.loadRaceSchedule(payload))
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
