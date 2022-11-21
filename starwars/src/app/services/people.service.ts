import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PeopleResponse } from '../interfaces/people.interface';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
    
  getPeople(page: number): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/people?page=${page}`);
  }

  public getPeopleById(character: People): Observable<People> {
    let id = character.url.split('/').reverse()[1];
    return this.http.get<People>(`${environment.apiBaseUrl}/people/${id}`)
  }
    
}

