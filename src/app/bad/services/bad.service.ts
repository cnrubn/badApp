import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BadInterface } from '../interfaces/bad-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadService {

  private baseURL = 'https://breakingbadapi.com/api/characters';

  constructor( private http: HttpClient ) { }

  getBad (): Observable<BadInterface[]> {

    return this.http.get<BadInterface[]>( this.baseURL );
  }

  
}
