import {ILocation} from "../interfaces/circuit.interface";

export class LocationDTO implements ILocation {

  country: string;
  locality: string;
  long: string;

  constructor(country: string, locality: string) {
    this.country = country;
    this.locality = locality;
  }
}
