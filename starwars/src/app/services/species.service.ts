import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Specie, SpeciesResponse } from '../interfaces/species.interface';


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http:HttpClient) { }

  getSpecies(page: number): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${environment.apiBaseUrl}/species?page=${page}`)
  }

  getSpecieById(specie: Specie): Observable<Specie>{
    let id = specie.url.split('/').reverse()[1]
    return this.http.get<Specie>(`${environment.apiBaseUrl}/species/${id}`)
  }
}