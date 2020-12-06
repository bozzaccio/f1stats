import {Action, createFeatureSelector, createReducer, createSelector, on, State} from '@ngrx/store';
import {IAppState} from '../../../../@core/interfaces/state.interface';
import * as dashboardAction from '../actions/dashboard.actions';


const initialState: IAppState = {
  isLoading: false,
};

const reducer = createReducer(initialState,
  on(dashboardAction.loadRaceSchedule, (state: IAppState) => ({
      ...state,
      isLoading: true
    })
  ),
  on(dashboardAction.loadRaceScheduleSuccess, (state: IAppState) => ({
      ...state,
      isLoading: false
    })
  ),
  on(dashboardAction.loadRaceScheduleFailed, (state: IAppState) => ({
      ...state,
      isLoading: false
    })
  ));

export function dashboardReducer(state: IAppState | undefined, action: Action) {
  return reducer(state, action);
}
