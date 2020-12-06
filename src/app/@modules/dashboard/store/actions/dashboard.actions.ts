import {createAction, props} from '@ngrx/store';
import {IBaseResponse} from "../../../../@core/interfaces/base-service.interface";
import {IApiConfigParameters} from "../../../../@core/interfaces/api-config-parameters";

export const loadRaceSchedule = createAction('[LOAD RACE SCHEDULE] START',
  props<IApiConfigParameters>());
export const loadRaceScheduleSuccess = createAction('[LOAD RACE SCHEDULE] SUCCESS load race data',
  props<IBaseResponse>());
export const loadRaceScheduleFailed = createAction('[LOAD RACE SCHEDULE] FAILED load race server error');
