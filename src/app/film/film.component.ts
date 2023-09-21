import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { FilmResponse } from '../model/FilmResponse';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: [];

  constructor(private filmService:FilmService){}

  ngOnInit(): void{
    this.filmService.getFilms().subscribe((data:[])=>{this.films = data
    });
  }

}
