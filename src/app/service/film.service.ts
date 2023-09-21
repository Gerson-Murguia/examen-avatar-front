import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { FilmResponse } from '../model/FilmResponse';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private host= environment.filmsURL;

  constructor(private http:HttpClient) { }

  public getFilms(): any{
    return this.http.get(`${this.host}/films`);
  }
}
