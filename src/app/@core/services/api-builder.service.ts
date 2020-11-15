import {Injectable} from '@angular/core';
import {ApiConfigParameters} from "../interfaces/api-config-parameters";

@Injectable({
  providedIn: 'root'
})
export class ApiBuilderService {

  private _baseUrl: string = 'http://ergast.com/api/f1';

  public requestBuilder(params: ApiConfigParameters): string {

    let requestUrl: string = this._baseUrl;

    if (params.year) {
      requestUrl.concat('/', params.year.toString());
    }

    if (params.raceNumber) {
      requestUrl.concat('/', params.raceNumber.toString());
    }

    if (params.category) {
      requestUrl.concat('/', params.category);
    }

    requestUrl.concat('.json');

    return requestUrl;
  }
}
