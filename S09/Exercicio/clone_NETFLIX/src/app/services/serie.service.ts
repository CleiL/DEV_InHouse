import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environments';
import { Serie } from '../common/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  [x: string]: any;

  constructor( private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${API_PATH}/series`)
  }

  getSerie(id: string): Observable<Serie>{
    return this.http.get<Serie>(`${API_PATH}/series/${id}`)
  }
}
