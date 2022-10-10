import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http:HttpClient) { }

  public getSpecies() : Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(`${API_BASE_URL}/species/`)
  }
}