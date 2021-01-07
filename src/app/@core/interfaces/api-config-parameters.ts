export interface IApiConfigParameters {
  category?: categoryEnum;
  year?: number | 'current';
  raceNumber?: number;
  showResult?: boolean;
}

export enum categoryEnum {
  SEASONS = 'seasons',
  QUALY = 'qualifying',
  RESULT = 'results',
  DRIVER_STAND = 'driverStandings',
  CONSTR_STAND = 'constructorStandings',
  DRIVER = 'drivers',
  CONSTRUCTOR = 'constructors',
  CIRCUIT = 'circuits',
  FINISHING_STATUS = 'status',
  LAPS = 'laps',
  PITSTOP = 'pitstops'
}
