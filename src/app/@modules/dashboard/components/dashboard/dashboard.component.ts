import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public sliderWPImages: string[] = [
    'assets/icons/jpg/wall1.jpg',
    'assets/icons/jpg/wall2.jpg',
    'assets/icons/jpg/wall3.jpg',
    'assets/icons/jpg/wall4.jpg',
    'assets/icons/jpg/wall5.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
