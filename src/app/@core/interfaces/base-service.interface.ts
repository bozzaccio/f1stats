import {Observable} from "rxjs";
import {IApiConfigParameters} from "./api-config-parameters";

export interface IBaseService {
  execute(payload: IApiConfigParameters): Observable<IBaseResponse>;
  mapResponse(payload: any): any;
}

export interface IBaseResponse{
  MRData: IBaseResponseData<any>;
}

export interface IBaseResponseData<T> {
  data: T,
  xmlns: string,
  series: string,
  url: string,
  limit: string,
  offset: string,
  total: string,
}
