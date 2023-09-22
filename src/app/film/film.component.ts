import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: [];
  isLoading: boolean = true;

  constructor(private filmService:FilmService, private router:Router){}

  ngOnInit(): void{
    this.filmService.getFilms().subscribe((data:[])=>{this.films = data
    this.isLoading = false;
    });
  }

  onFilmClick(filmId: number){
    this.router.navigate(['/film/',filmId]);
  }

}
