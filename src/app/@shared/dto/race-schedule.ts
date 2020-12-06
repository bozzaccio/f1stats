import {IRaceSchedule, IRaceTable} from "../interfaces/race-schedule.interface";

export class RaceSchedule implements IRaceSchedule {

  private _data: IRaceTable;
  private _limit: string;
  private _offset: string;
  private _series: string;
  private _total: string;
  private _url: string;
  private _xmlns: string;

  constructor(data: IRaceTable, limit: string, offset: string, series: string, total: string, url: string, xmlns: string) {
    this._data = data;
    this._limit = limit;
    this._offset = offset;
    this._series = series;
    this._total = total;
    this._url = url;
    this._xmlns = xmlns;
  }

  get data(): IRaceTable {
    return this._data;
  }

  set data(value: IRaceTable) {
    this._data = value;
  }

  get limit(): string {
    return this._limit;
  }

  set limit(value: string) {
    this._limit = value;
  }

  get offset(): string {
    return this._offset;
  }

  set offset(value: string) {
    this._offset = value;
  }

  get series(): string {
    return this._series;
  }

  set series(value: string) {
    this._series = value;
  }

  get total(): string {
    return this._total;
  }

  set total(value: string) {
    this._total = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get xmlns(): string {
    return this._xmlns;
  }

  set xmlns(value: string) {
    this._xmlns = value;
  }
}
