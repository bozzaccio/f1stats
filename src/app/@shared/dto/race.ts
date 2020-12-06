import {IRace} from "../interfaces/race.interface";
import {ICircuit} from "../interfaces/circuit.interface";

export class Race implements IRace{

  private _season: string;
  private _round: string;
  private _url: string;
  private _raceName: string;
  private _circuit: ICircuit;
  private _date: string;
  private _time: string;

  constructor(season: string, round: string, url: string, raceName: string, circuit: ICircuit, date: string, time: string) {
    this._season = season;
    this._round = round;
    this._url = url;
    this._raceName = raceName;
    this._circuit = circuit;
    this._date = date;
    this._time = time;
  }


  get season(): string {
    return this._season;
  }

  set season(value: string) {
    this._season = value;
  }

  get round(): string {
    return this._round;
  }

  set round(value: string) {
    this._round = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get raceName(): string {
    return this._raceName;
  }

  set raceName(value: string) {
    this._raceName = value;
  }

  get circuit(): ICircuit {
    return this._circuit;
  }

  set circuit(value: ICircuit) {
    this._circuit = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }
}
