import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { FilmResponse } from '../model/FilmResponse';
import { Films } from '../model/Films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private host= environment.filmsURL;

  constructor(private http:HttpClient) { }

  public getFilms(): any{
    return this.http.get(`${this.host}/film`);
  }

  public getFilmById(id:number): any{
    return this.http.get(`${this.host}/film/${id}`);
  }

  public getCharactersByFilmId(filmId:number):any{
    return this.http.get(`${this.host}/characters/${filmId}`);
  }
}
