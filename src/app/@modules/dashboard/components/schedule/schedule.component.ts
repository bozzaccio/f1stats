import { Component, OnInit } from '@angular/core';
import {ApiBuilderService} from "../../../../@core/services/api-builder.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private _apiService: ApiBuilderService) { }

  ngOnInit(): void {
  }

}
