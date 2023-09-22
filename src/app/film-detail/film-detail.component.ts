import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  filmId: number;
  film:any;
  characters:[];
  isLoading: boolean = true;
  isCharactersLoading: boolean = true;
  constructor(private route: ActivatedRoute, private filmService:FilmService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe( (params: any) => {
      this.filmId =+params['id'];
      //cargar detalles de la pelicula con el service
      this.filmService.getFilmById(this.filmId).subscribe((data:[])=>{this.film = data
        this.isLoading=false;
      });
      //cargar nombres de personajes
      this.filmService.getCharactersByFilmId(this.filmId).subscribe((data:[])=>{
        this.characters = data;
      });
        this.isCharactersLoading=false;
    });
  }


}
