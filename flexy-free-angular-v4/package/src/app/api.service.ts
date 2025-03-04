import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: {
    au: string;
    eu: string;
    jp: string;
    na: string;
  };
  tail: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://www.amiiboapi.com/api/amiibo/?format=json';

  constructor(private http: HttpClient) { }

  getAmiiboData(): Observable<{ amiibo: Amiibo[] }> {
    return this.http.get<{ amiibo: Amiibo[] }>(this.apiUrl);
  }
}