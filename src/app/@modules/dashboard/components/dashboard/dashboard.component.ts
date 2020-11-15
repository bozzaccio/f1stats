import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public sliderWPImages: string[] = [
    'assets/icons/jpg/wall1.jpg',
    'assets/icons/jpg/wall2.jpg',
    'assets/icons/jpg/wall3.jpg',
    'assets/icons/jpg/wall4.jpg',
    'assets/icons/jpg/wall5.jpg',
  ];

  constructor(private _router: Router) { }

  public navigateTo(routeName: string){
    this._router.navigate([routeName]);
  }

}
