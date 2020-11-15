import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiBuilderService {

  private _baseUrl: string = 'http://ergast.com/api/f1';



  public requestBuilder(): any{

  }
}
