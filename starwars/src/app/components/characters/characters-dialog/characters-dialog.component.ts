import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterData } from 'src/app/interfaces/characters';
import { Film } from 'src/app/interfaces/films';
import { FilmsService } from 'src/app/services/films.service';


@Component({
  selector: 'app-characters-dialog',
  templateUrl: './characters-dialog.component.html',
  styleUrls: ['./characters-dialog.component.css']
})
export class CharactersDialogComponent implements OnInit {

  films: Film [] = []
  constructor(@Inject(MAT_DIALOG_DATA) public data: CharacterData, private filmServ: FilmsService) { }
  
  ngOnInit(): void {

    this.filmServ.getFilms(1).subscribe(resp => {
      resp.results.forEach(film => {
        if(film.characters.includes(this.data.characterInfo.url)){
          this.films.push(film)
        }
      })
    })
  }
}
