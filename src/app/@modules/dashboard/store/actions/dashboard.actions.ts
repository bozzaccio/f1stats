import {createAction, props} from '@ngrx/store';
import {IAppState} from '../../../../@core/interfaces/state.interface';

export const loadRaceSchedule = createAction('[LOAD RACE SCHEDULE] START',
  props<IAppState>());
export const loadRaceScheduleSuccess = createAction('[LOAD RACE SCHEDULE] SUCCESS load race data',
  props<IAppState>());
export const loadRaceScheduleFailed = createAction('[LOAD RACE SCHEDULE] FAILED load race server error',
  props<IAppState>());
