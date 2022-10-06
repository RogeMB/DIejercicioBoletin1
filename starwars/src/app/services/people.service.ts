import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../interfaces/films.interface';
import { PeopleResponse } from '../interfaces/people.interface';


const API_BASE_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
    
  public getPeople() : Observable<PeopleResponse> {
      return this.http.get<PeopleResponse>(`${API_BASE_URL}/people/`)
    }

  public getFilms(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${API_BASE_URL}/films/`);
  }
    
}

