import {Injectable} from '@angular/core';
import {IBaseService} from "../../../@core/interfaces/base-service.interface";
import {Observable} from "rxjs";
import {ApiBuilderService} from "../../../@core/services/api-builder.service";
import {IApiConfigParameters} from "../../../@core/interfaces/api-config-parameters";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IBaseService {

  constructor(private _apiBuilderService: ApiBuilderService) {
  }

  execute(payload: IApiConfigParameters): Observable<any> {
    return this._apiBuilderService.getData(this._apiBuilderService.requestBuilder(payload));
  }


}
