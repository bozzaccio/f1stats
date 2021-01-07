import {Injectable} from "@angular/core";
import {IBaseResponse, IBaseService} from "../../../@core/interfaces/base-service.interface";
import {IApiConfigParameters} from "../../../@core/interfaces/api-config-parameters";
import {Observable} from "rxjs";
import {ApiBuilderService} from "../../../@core/services/api-builder.service";

@Injectable({
  providedIn: 'root'
})
export class DetailService implements IBaseService {

  constructor(private _apiBuilderService: ApiBuilderService) {
  }

  execute(payload: IApiConfigParameters): Observable<IBaseResponse> {
    return this._apiBuilderService.getData(this._apiBuilderService.requestBuilder(payload));
  }

  mapResponse(payload: any): any {

    const response = {
      result: [],
      raceName: null,
      fastestLap: {
        time: null,
        driverName: null,
        driverTeamName: null
      },
    };

    const data = payload.MRData.RaceTable.Races[0];

    response.raceName = data?.raceName;

    data?.Results.forEach((result: any) => {

      if (result?.FastestLap?.rank === "1") {
        response.fastestLap.time = result?.FastestLap.Time.time;
        response.fastestLap.driverName = result?.Driver.givenName + ' ' + result?.Driver.familyName;
        response.fastestLap.driverTeamName = result?.Constructor.name;
      }

      const finalResult = {
        driverName: result?.Driver.givenName + ' ' + result?.Driver.familyName,
        driverNumber: result?.Driver.permanentNumber,
        driverTeamName: result?.Constructor.name,
        gridPosition: result?.grid,
        finalPosition: result?.position,
        status: result?.status
      }

      response.result?.push(finalResult);
    });

    response.result?.sort(DetailService._positionOrder)
    return response;
  }

  private static _positionOrder(a: any, b: any) {
    return parseInt(a.finalPosition) - parseInt(b.finalPosition)
  }

}
