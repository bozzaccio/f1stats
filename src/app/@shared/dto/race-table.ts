import {IRaceTable} from "../interfaces/race-schedule.interface";
import {IRace} from "../interfaces/race.interface";

export class RaceTable implements IRaceTable{

  private _races: IRace[];
  private _season: string;

  constructor(races: IRace[], season: string) {
    this._races = races;
    this._season = season;
  }

  get races(): IRace[] {
    return this._races;
  }

  set races(value: IRace[]) {
    this._races = value;
  }

  get season(): string {
    return this._season;
  }

  set season(value: string) {
    this._season = value;
  }
}
