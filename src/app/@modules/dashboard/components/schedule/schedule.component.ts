import {Component, OnInit, ViewChild} from '@angular/core';
import {ScheduleService} from "../../services/schedule.service";
import {IApiConfigParameters} from "../../../../@core/interfaces/api-config-parameters";
import {IRace} from "../../../../@shared/interfaces/race.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['raceName', 'circuit', 'locality', 'date'];
  public dataSource = new MatTableDataSource<IRace>();

  constructor(private _scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.callServer();
  }

  public callServer() {
    const payload: IApiConfigParameters = {
      year: "current"
    }
    this._scheduleService.execute(payload).subscribe(data => {
      this.dataSource = new MatTableDataSource<IRace>(this._scheduleService.mapResponse(data).races);
      this.dataSource.paginator = this.paginator;
    });
  }

}
