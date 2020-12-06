import {IBaseResponseData} from "../../@core/interfaces/base-service.interface";
import {IRace} from "./race.interface";

export interface IRaceSchedule extends IBaseResponseData<IRaceTable>{}

export interface IRaceTable{
  season: string,
  races: IRace[]
}
