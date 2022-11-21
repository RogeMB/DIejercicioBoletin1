import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film, FilmsResponse } from '../interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(
      `${environment.apiBaseUrl}/films?page=${page}`
    );
  }

  getFilmById(film: Film): Observable<Film> {
    let id = film.url.split('/').reverse()[1];
    return this.http.get<Film>(`${environment.apiBaseUrl}/films/${id}`);
  }


}
