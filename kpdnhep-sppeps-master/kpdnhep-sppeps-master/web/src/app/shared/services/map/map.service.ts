import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import { Map } from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { production } from 'src/environments/production';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = production.mapbox.accessToken

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map = new AsyncSubject<Map>();

  constructor(
    private http: HttpClient
  ){
  }

  getData(file = 1): Observable<any> {
    return this.http.get<any>(`../../../assets/data.${file}.json`); // Load json file in assets/json/{fileName}
  }

}
