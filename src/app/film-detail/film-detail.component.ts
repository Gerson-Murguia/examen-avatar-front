import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private router:Router, private route: ActivatedRoute, private filmService:FilmService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const charactersData = localStorage.getItem('charactersDatos');
    const detailsData = localStorage.getItem('detailsDatos');
    if (charactersData && detailsData) {
      this.characters = JSON.parse(charactersData);
      this.film=JSON.parse(detailsData)
      this.isCharactersLoading=false;
      this.isLoading=false;
    } else {
      this.cargarDetalles();
    }



   
  }

  regresar() {
    this.router.navigate(['/']);
  }

  cargarDetalles(){
     this.route.params.subscribe( (params: any) => {
      this.filmId =+params['id'];
      //cargar detalles de la pelicula con el service
      this.filmService.getFilmById(this.filmId).subscribe((data:[])=>{this.film = data
        localStorage.setItem('detailsDatos', JSON.stringify(data));
        this.isLoading=false;
      });
      //cargar nombres de personajes
      this.filmService.getCharactersByFilmId(this.filmId).subscribe((data:[])=>{
        this.characters = data;
        localStorage.setItem('charactersDatos', JSON.stringify(data));
        this.isCharactersLoading=false;
      });
    });
  }
}
