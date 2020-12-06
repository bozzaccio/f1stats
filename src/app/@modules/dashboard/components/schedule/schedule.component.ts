import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../../services/schedule.service";
import {IApiConfigParameters} from "../../../../@core/interfaces/api-config-parameters";
import {IRace} from "../../../../@shared/interfaces/race.interface";
import {IRaceTable} from "../../../../@shared/interfaces/race-schedule.interface";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public raceTable: IRaceTable;

  constructor(private _scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    // this.callServer();
  }

  public callServer() {
    const payload: IApiConfigParameters = {
      year: "current"
    }
    this._scheduleService.execute(payload).subscribe(data => {
      this.raceTable = this._scheduleService.mapResponse(data);
    });
  }

}
