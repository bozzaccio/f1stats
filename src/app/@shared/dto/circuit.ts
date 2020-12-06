import {ICircuit, ILocation} from "../interfaces/circuit.interface";

export class Circuit implements ICircuit {

  private _circuitId: string;
  private _url: string;
  private _circuitName: string;
  private _location: ILocation;

  constructor(circuitId: string, url: string, circuitName: string, location: ILocation) {
    this._circuitId = circuitId;
    this._url = url;
    this._circuitName = circuitName;
    this._location = location;
  }

  get circuitId(): string {
    return this._circuitId;
  }

  set circuitId(value: string) {
    this._circuitId = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get circuitName(): string {
    return this._circuitName;
  }

  set circuitName(value: string) {
    this._circuitName = value;
  }

  get location(): ILocation {
    return this._location;
  }

  set location(value: ILocation) {
    this._location = value;
  }
}
