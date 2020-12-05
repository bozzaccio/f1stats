import {createReducer} from '@ngrx/store';
import {IAppState} from '../../../../@core/interfaces/state.interface';

const initialState: IAppState = {
  data: [],
  isLoading: false,
};

export const DashboardReducer = createReducer(initialState);
