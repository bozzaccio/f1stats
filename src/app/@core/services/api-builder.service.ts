import {Injectable} from '@angular/core';
import {IApiConfigParameters} from "../interfaces/api-config-parameters";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiBuilderService {

  private _baseUrl: string = 'https://ergast.com/api/f1';

  constructor(private _http: HttpClient) {
  }

  public requestBuilder(params: IApiConfigParameters): string {

    let requestUrl: string = this._baseUrl;

    if (params.year) {
      requestUrl = requestUrl.concat('/', params.year.toString());
    }

    if (params.raceNumber) {
      requestUrl = requestUrl.concat('/', params.raceNumber.toString());
    }

    if (params.category) {
      requestUrl = requestUrl.concat('/', params.category);
    }

    requestUrl = requestUrl.concat('.json');

    return requestUrl;
  }

  public getData(requestUrl: string): Observable<any> {

    return this._http.get(requestUrl);
  }
}
