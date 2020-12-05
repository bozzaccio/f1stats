import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../../services/schedule.service";
import {IApiConfigParameters} from "../../../../@core/interfaces/api-config-parameters";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private _scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
  }

  public callServer() {
    const payload: IApiConfigParameters = {
      year: "current"
    }
    this._scheduleService.execute(payload).subscribe(data => {
      console.log(data);
    });
  }

}
