import {Observable} from "rxjs";
import {IApiConfigParameters} from "./api-config-parameters";

export interface IBaseService{

  execute(payload: IApiConfigParameters): Observable<any>;
}
