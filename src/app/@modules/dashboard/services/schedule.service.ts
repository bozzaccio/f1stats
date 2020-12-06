import {Injectable} from '@angular/core';
import {IBaseResponse, IBaseService} from "../../../@core/interfaces/base-service.interface";
import {Observable} from "rxjs";
import {ApiBuilderService} from "../../../@core/services/api-builder.service";
import {IApiConfigParameters} from "../../../@core/interfaces/api-config-parameters";
import {IRaceSchedule, IRaceTable} from "../../../@shared/interfaces/race-schedule.interface";
import {LocationDTO} from "../../../@shared/dto/locationDTO";
import {ILocation} from "../../../@shared/interfaces/circuit.interface";
import {Circuit} from "../../../@shared/dto/circuit";
import {Race} from "../../../@shared/dto/race";
import {IRace} from "../../../@shared/interfaces/race.interface";
import {RaceTable} from "../../../@shared/dto/race-table";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IBaseService {

  constructor(private _apiBuilderService: ApiBuilderService) {
  }

  public execute(payload: IApiConfigParameters): Observable<IBaseResponse> {
    return this._apiBuilderService.getData(this._apiBuilderService.requestBuilder(payload));
  }

  public mapResponse(payload: any): any {

    const racesResult: IRace[] = [];
    let raceTable: IRaceTable;

    payload.MRData.RaceTable.Races.forEach(race => {

      const locationDTO: ILocation = new LocationDTO(race.Circuit.Location.country,
        race.Circuit.Location.locality);
      const circuit = new Circuit(race.Circuit.circuitId,
        race.Circuit.url,
        race.Circuit.circuitName,
        locationDTO);
      const mappedRace = new Race(race.season, race.round, race.url, race.raceName, circuit, race.date, race.time);

      racesResult.push(mappedRace);
    })

    raceTable = new RaceTable(racesResult, payload.MRData.RaceTable.season)

    return raceTable;
  }

}
